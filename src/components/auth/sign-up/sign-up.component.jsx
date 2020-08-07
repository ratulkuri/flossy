import React from 'react';
import FormInput from '../../forms/form-input.component';
import PrimaryButton from '../../buttons/primary-button.component';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            conpassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: '',
            conpassword: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="name"
                        label='Full Name'
                        value={this.state.name}
                        handleChange={this.handleChange}
                        required='required'
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required='required'
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="conpassword"
                        label='Confirm Password'
                        value={this.state.conpassword}
                        onChange={this.handleChange}
                        required
                    />

                    <PrimaryButton type='submit'>Sign Up</PrimaryButton>
                </form>
            </div>
        )
    }
}

export default SignUp;