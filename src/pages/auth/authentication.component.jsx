import React from 'react';
import SignIn from '../../components/auth/sign-in/sign-in.component'
import SignUp from '../../components/auth/sign-up/sign-up.component'

import './authentication.style.scss';

const AuthenticationPage = () => (
    <div className="authentication-container">
        <SignIn />
        <SignUp />
    </div>
);

export default AuthenticationPage;