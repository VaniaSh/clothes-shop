import React from 'react';

import './authorization.styles.scss'

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Authorization = () => {
    return (
        <div className='authorization'>
            <SignIn/>
            <SignUp/>
        </div>
    );
};

export default Authorization;