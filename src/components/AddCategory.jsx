import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeValue = ({ target }) => {
        setInputValue(target.value);
    }
    
    const addCategory = (e) => {   
        e.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        // Funcion que recibe la nueva categoria a guardar
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ addCategory} className="flex">
            <input type='text' 
                name='buscar' 
                placeholder='Buscar'
                value={inputValue}
                onChange={ onChangeValue } 
            />
        </form>
    );
}