import React from "react";
import { connect } from "react-redux";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
import { withRouter } from 'react-router-dom';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const SignInAndSignUp = ({ currentUser, history }) => {
    if (currentUser){
        history.push('/')
    }

    return (
        <SignInAndSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(SignInAndSignUp));