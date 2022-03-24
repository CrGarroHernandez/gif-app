import React, { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['Marvel', 'DC'];
    const [categories, setCategories] = useState(['Marvel', 'DC']);

    const handleAdd = () => {
        // setCategories([...categories, '21P']);
        setCategories(cats => [...cats, '21P'] );
    }

    return (
        <>
            <h2>Un titulo</h2>
            <hr></hr>

            <button onClick={handleAdd}>Agregar</button>
         
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}
 
export default GifExpertApp;