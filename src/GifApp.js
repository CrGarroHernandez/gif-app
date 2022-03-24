import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Marvel', 'DC']);

    return (
        <>
            <h2>Un titulo</h2>
            <AddCategory />
            <hr/>
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