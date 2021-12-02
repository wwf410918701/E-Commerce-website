import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { CollectionPageContainer, CollectionTitle, ItemsContainer } from "./collection.styles";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId))
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

export default CollectionPage