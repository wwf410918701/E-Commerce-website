import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownContainer, CartItemsContainer, CartDropDownButton, EmptyMessage } from "./cart-dropdown.styles";

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
                    <EmptyMessage>Your cart is empty</EmptyMessage>
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