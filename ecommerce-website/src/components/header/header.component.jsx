import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { HeaderContainer, LogoContainer, OptionsCollection, OptionContainer } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsCollection>
            <OptionContainer to='/shop'>
                SHOP
            </OptionContainer>
            <OptionContainer to='/shop'>
                CONTACT
            </OptionContainer>
            {hidden? null : <CartDropdown/>}    
            {
                currentUser?
                (<OptionContainer as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionContainer>)
                :
                (<OptionContainer to='/signin'>
                    SIGN IN
                </OptionContainer>)
            }
            <CartIcon/>
        </OptionsCollection>
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);