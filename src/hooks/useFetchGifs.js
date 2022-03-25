import { getGifs } from '../helpers/getGifs';
import { useState, useEffect } from 'react';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(gifs => {
                setState({
                    data: gifs,
                    loading: false
                })
            });
    }, [category]); 

    return state;
}