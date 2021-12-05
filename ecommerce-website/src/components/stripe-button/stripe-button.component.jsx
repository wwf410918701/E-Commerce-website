import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JzYDuKKAe08nYQuSmVnZOHv48xXJPpQzoM4QaUEgIsJB7No06LkJ0W9V4U7ObOEuJC1J2UDafyOQD8OL22R8M6C00gamtzpcg';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment successful')
        })
        .catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment. Please make sure you use the provided credit cart, which is at the bottom of the page.')
        })
    }

    // const onToken = token => {
    //     alert('Payment success!');
    // }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;