import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('asdas');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}/>
            <button>Agregar</button>
        </form>
    )
}
