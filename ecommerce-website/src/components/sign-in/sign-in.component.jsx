import React from "react";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { CustomButtonContainer } from "../custom-button/custom-button.styles";
import { SignInContainer, SignInTitle, SignInButtonContainer } from "./sigin-in.styles";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <SignInContainer>
                <SignInTitle>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                </SignInTitle>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type="email"  onChange={this.handleChange} value={this.state.email} label='email' required />
                    <FormInput 
                        name="password"
                        type="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <SignInButtonContainer>
                        <CustomButtonContainer type="submit">
                            Sign in
                        </CustomButtonContainer>
                        <CustomButtonContainer type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonContainer>
                    </SignInButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;