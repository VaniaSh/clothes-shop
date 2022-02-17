import React from "react";

import './sign-in.styles.scss'
import Input from "../input/input.component";
import Button from "../button/button.component";

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>You can sign-in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input name='email'
                           type="email"
                           value={this.state.email}
                           required
                           label='Email'
                           handleChange={this.handleChange}

                    />

                    <Input name='password'
                           type="password"
                           value={this.state.password}
                           required
                           label='Password'
                           handleChange={this.handleChange}

                    />

                    <Button type="submit">Sign in</Button>
                </form>
            </div>
        )

    }
}

export default SignIn