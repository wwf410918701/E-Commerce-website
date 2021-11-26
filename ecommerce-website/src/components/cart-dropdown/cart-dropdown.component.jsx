import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownContainer, CartItemsContainer, CartDropDownButton } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                )
                  :
                (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </CartItemsContainer>
        <CartDropDownButton
            onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}
        >
            GO TO CHECKOUT
        </CartDropDownButton>
    </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));