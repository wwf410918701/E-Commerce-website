import React from "react";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { CollectionItemContainer, CollectionItemFooterContainer, CollectionItemImageContainer, CollectionItemNameContainer, CollectionItemPriceContainer, CollectionItemButtonContainer } from "./collection-item.styles";
const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item

    return (
        <CollectionItemContainer>
            <CollectionItemImageContainer
                className='image' image = {imageUrl}
            />
            <CollectionItemFooterContainer>
                <CollectionItemNameContainer className='name'>{name}</CollectionItemNameContainer>
                <CollectionItemPriceContainer className='price'>{`$${price}`}</CollectionItemPriceContainer>
            </CollectionItemFooterContainer>
            <CollectionItemButtonContainer inverted onClick = {() => addItem(item)}>ADD TO CART</CollectionItemButtonContainer>
        </CollectionItemContainer>
    )  
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);