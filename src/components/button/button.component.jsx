import React from 'react';
import './button.style.scss'

const Button= ({children, isGoogleButton, ...otherButtonProps}) => {
    return (
        <button className={`${isGoogleButton ? 'is-google-button' : ''} button`} {...otherButtonProps}>
            {children}
        </button>
    );
};

export default Button;