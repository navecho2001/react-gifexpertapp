import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ SetCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
if (inputValue.trim().length > 2){
    SetCategories( cats => [ inputValue , ...cats ]);
    setInputValue('');
}
        // console.log( 'Submit hecho')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
SetCategories: PropTypes.func.isRequired
}