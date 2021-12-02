import React from "react";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import {useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { CheckOutPageContainer, CheckOutHeader, CheckOutHeaderBlock, TestWarningContainer, TotalContainer } from "./checkout.styles";

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return (
        <CheckOutPageContainer>
            <CheckOutHeader>
                <CheckOutHeaderBlock>
                    <span>Product</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Description</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Quantity</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Price</span>
                </CheckOutHeaderBlock>
                <CheckOutHeaderBlock>
                    <span>Remove</span>
                </CheckOutHeaderBlock>
            </CheckOutHeader>
            {
                cartItems.map(cartItem => (
                    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <TestWarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/28 - CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={ total }/>
        </CheckOutPageContainer>
    )
}

export default CheckOut;