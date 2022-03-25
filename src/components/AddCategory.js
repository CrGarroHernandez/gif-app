import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(category => [inputValue, ...category]);
            setInputValue('');   
        }
        // console.log(category);f
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Buscar Gif's"
                onChange={handleInputChange}/>
            {/* <button>Agregar</button> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}