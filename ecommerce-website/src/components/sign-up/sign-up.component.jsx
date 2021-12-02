import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState(
        {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    )

    const handleChange = event => {
        const { name, value } = event.target
        setUserCredentials({ 
            ...userCredentials,
            [name]: value})
    }

    const handleSubmit = async (event) => { 
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = userCredentials
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        } 
        try {
            await signUpStart({ email, displayName, password })
            setUserCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    const { displayName, email, password, confirmPassword } = userCredentials;

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='displayName'
                    name='displayName'
                    value={displayName}
                    label='Display Name'
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    label='E-mail'
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    type='confirmPassword'
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: user => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)