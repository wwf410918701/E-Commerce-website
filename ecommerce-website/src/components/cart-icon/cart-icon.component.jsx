import React from "react";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer className='shopping-icon' />
        <ItemCountContainer className='item-count'>{ itemsCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

const mapStateToProps = state => ({itemsCount: selectCartItemsCount(state)})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);