import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { CustomButtonContainer } from "../custom-button/custom-button.styles";
import { SignInContainer, SignInTitle, SignInButtonContainer } from "./sigin-in.styles";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = userCredentials
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials(
            {
                ...userCredentials,
                [name]: value
            }
        )
    }


    return(
        <SignInContainer>
            <SignInTitle>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </SignInTitle>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type="email"  onChange={handleChange} value={userCredentials.email} label='email' required />
                <FormInput 
                    name="password"
                    type="password" 
                    onChange={handleChange}
                    value={userCredentials.password}
                    label='password'
                    required
                />
                <SignInButtonContainer>
                    <CustomButtonContainer type="submit">
                        Sign in
                    </CustomButtonContainer>
                    <CustomButtonContainer type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButtonContainer>
                </SignInButtonContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);