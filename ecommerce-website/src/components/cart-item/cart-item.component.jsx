import React from "react";
import { CartItemContainer, CartItemImg, CartItemDetails, CartItemName } from "./cart-item.styles";

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt="item" />
        <CartItemDetails className='item-details'>
            <CartItemName className='name'>{name}</CartItemName>
            <span className='price'>
                {`${quantity} x $${price}`}
            </span>
        </CartItemDetails>
    </CartItemContainer>
)

export default React.memo(CartItem);