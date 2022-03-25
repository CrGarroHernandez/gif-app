import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

export const GifGrid = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
                {loading && <p>Cargando</p> }
                <div className='card-grid animate__animated animate__fadeIn'>
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

