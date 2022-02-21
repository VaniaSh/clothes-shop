import React from 'react';
import './button.style.scss'

const Button= ({children, reverse, isGoogleButton, ...otherButtonProps}) => {
    return (
        <button className={` ${isGoogleButton ? 'is-google-button' : ''} ${reverse ? 'reverse' : ''} button`} {...otherButtonProps}>
            {children}
        </button>
    );
};

export default Button;