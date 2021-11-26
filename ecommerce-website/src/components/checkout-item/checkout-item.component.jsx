import React from "react";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";
import { CheckOutImageContainer, CheckOutItemContainer, ImageContainer, PriceNameContainer, QuantityContainer, Arrow, Value, RemoveButton } from "./checkout-item.styles";

const CheckOutItem = ({ cartItem, clearItemFromCart, addItemToCart, declineItem }) => {
    const {name, imageUrl, price, quantity} =cartItem
    return (
    <CheckOutItemContainer>
        <CheckOutImageContainer>
            <ImageContainer src={imageUrl} alt="item" />
        </CheckOutImageContainer>
        <PriceNameContainer>{name}</PriceNameContainer>
        <QuantityContainer>
            <Arrow onClick={() => declineItem(cartItem)}>
                &#10094;
            </Arrow>
                <Value>{quantity}</Value>
            <Arrow onClick={() => addItemToCart(cartItem)}>
                &#10095;
            </Arrow>
        </QuantityContainer>
        <PriceNameContainer>{`$${price}`}</PriceNameContainer>
        <RemoveButton onClick={ () => clearItemFromCart(cartItem)} key={cartItem.id}>
            &#10005;
        </RemoveButton>
    </CheckOutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItem(item)),
    declineItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem)