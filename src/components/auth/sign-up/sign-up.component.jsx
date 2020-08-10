import React from 'react';
import FormInput from '../../forms/form-input.component';
import PrimaryButton from '../../buttons/primary-button.component';

import './sign-up.style.scss';
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password didn't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { name });

            this.setState({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });



        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { name, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="name"
                        label='Full Name'
                        value={name}
                        handleChange={this.handleChange}
                        required='required'
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={email}
                        handleChange={this.handleChange}
                        autoComplete='email'
                        required='required'
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        autoComplete='new-password'
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        autoComplete='new-password'
                        required
                    />

                    <PrimaryButton type='submit'>Sign Up</PrimaryButton>
                </form>
            </div>
        )
    }
}

export default SignUp;