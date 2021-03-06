import React from 'react';
import FormInput from '../../forms/form-input.component';
import PrimaryButton from '../../buttons/primary-button.component';
import { signInWithGoogle, auth } from '../../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword( email, password);
            this.setState({email: '', password: ''});

        } catch (error) {
            console.log(error);
        }

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        autoComplete='email'
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        autoComplete='current-password'
                        required
                    />

                    <PrimaryButton type='submit'>Sign In</PrimaryButton>
                    <PrimaryButton onClick={ signInWithGoogle } type='button' isGoogleSignIn>Sign In with Google</PrimaryButton>
                </form>
            </div>
        )
    }
}

export default SignIn;