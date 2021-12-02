import React from "react";
import { useSelector } from "react-redux";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
import { useHistory } from 'react-router-dom';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const SignInAndSignUp = () => {
    const currentUser = useSelector(selectCurrentUser);
    const history=useHistory();

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

export default SignInAndSignUp;