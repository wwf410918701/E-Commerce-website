import React from "react";
import './checkout-item.styles.scss'
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";

const CheckOutItem = ({ cartItem, clearItemFromCart, addItemToCart, declineItem }) => {
    const {name, imageUrl, price, quantity} =cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => declineItem(cartItem)}>
                &#10094;
            </div>
                <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                &#10095;
            </div>
        </span>
        <span className='price'>{`$${price}`}</span>
        <div onClick={ () => clearItemFromCart(cartItem)} key={cartItem.id} className='remove-button'>
            &#10005;
        </div>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItem(item)),
    declineItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem)