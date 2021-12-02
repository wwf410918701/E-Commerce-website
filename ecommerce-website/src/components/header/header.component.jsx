import React from "react";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect, useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { HeaderContainer, LogoContainer, OptionsCollection, OptionContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    const fireSignOutStart = () => dispatch(signOutStart())

    return (
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
                    (<OptionContainer as='div' onClick={fireSignOutStart}>
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
    );
}

export default Header;