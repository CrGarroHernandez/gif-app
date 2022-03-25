import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GridItem } from './GridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map(img => (
                    <GridItem 
                        key={img.id}
                        // img={img}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}

