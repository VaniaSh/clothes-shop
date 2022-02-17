import React from 'react';
import './input.style.scss'

const Input = ({label, handleChange, ...otherInputProps}) => {
    return (
        <div className='group'>
            <input
                onChange={handleChange}
                className='form-input'
                {...otherInputProps}
            />
            {
                label ?
                    (<label
                        className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}
                    >
                        {label}
                    </label>)
                    :
                    null
            }
        </div>
    );
};

export default Input;