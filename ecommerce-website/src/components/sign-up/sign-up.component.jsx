import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value})
    }

    handleSubmit = async (event) => { 
        event.preventDefault()
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state
        if(password !== confirmPassword){
            alert("Passwords don't match")
            return
        } 
        try {
            await signUpStart({ email, displayName, password })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='displayName'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        label='E-mail'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='confirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: user => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)