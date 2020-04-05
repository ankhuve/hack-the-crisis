import React from 'react';
import './input.scss';

const Input = ({label, handleInput, value, name, textarea, placeholder}) => {
    return(
        <div className="input--text">
            <label className="input-field__label">{label}</label>
            {
                textarea ? <textarea rows="7" cols="33" onChange={handleInput} value={value} name={name} placeholder={placeholder}/> : <input className="input-field input-field--text" onChange={handleInput} value={value} name={name} placeholder={placeholder} />
            }

        </div>
    )
}

export default Input;