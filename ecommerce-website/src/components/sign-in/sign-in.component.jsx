import React from "react";
import FormInput from "../form-input/form-input.component";
import { CustomButtonContainer } from "../custom-button/custom-button.styles";
import { SignInContainer, SignInTitle, SignInButtonContainer } from "./sigin-in.styles";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

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
        const { emailSignInStart } = this.props
        const { email, password } = this.state
        emailSignInStart(email, password)
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props


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
                        <CustomButtonContainer type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign in with Google
                        </CustomButtonContainer>
                    </SignInButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);