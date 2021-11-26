import React from "react";
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import CartItem from "../../components/cart-item/cart-item.component";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { CheckOutPageContainer, CheckOutHeader, CheckOutHeaderBlock, TestWarningContainer, TotalContainer } from "./checkout.styles";

const CheckOut = ({ cartItems, total }) => (
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut);