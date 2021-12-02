import React, { useState } from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = () => {
    const dispatch = useDispatch();
    const fireToggleCartHidden = () => { dispatch(toggleCartHidden()) };
    const itemsCount = useSelector(selectCartItemsCount);
    
    return (
        <CartIconContainer onClick={fireToggleCartHidden}>
            <ShoppingIconContainer className='shopping-icon' />
            <ItemCountContainer className='item-count'>{ itemsCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

export default CartIcon;