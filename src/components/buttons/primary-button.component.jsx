import React from 'react';

import './primary-button.style.scss';


const PrimaryButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} primary-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default PrimaryButton;