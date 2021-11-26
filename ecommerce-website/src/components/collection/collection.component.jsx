import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { CollectionPageContainer, CollectionTitle, ItemsContainer } from "./collection.styles";
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{ title }</CollectionTitle>
            <ItemsContainer>
                {items.map(item => (<CollectionItem key={item.id} item={item} className='collection-item'/>))}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)