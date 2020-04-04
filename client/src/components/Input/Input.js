import React from 'react';
import './input.scss';

const Input = ({label, handleInput, value, name, textarea}) => {
    return(
        <div className="input--text">
            <label className="input-field__label">{label}</label>
            {
                textarea ? <textarea rows="7" cols="33" onChange={handleInput} value={value} name={name}/> : <input className="input-field input-field--text" onChange={handleInput} value={value} name={name} />
            }

        </div>
    )
}

export default Input;