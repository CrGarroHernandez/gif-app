import React, { useState, useEffect } from 'react'
import { GridItem } from './GridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const q = 'cr7';
        const limit = '10';
        const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&apikey=Oom6bcCC1Rf3FLTwhOTUyU2xcRpusGdx`;
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

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

