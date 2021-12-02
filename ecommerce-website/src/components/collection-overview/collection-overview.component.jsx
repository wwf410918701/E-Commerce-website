import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from '../collection-preview/collection-preview.component'
import { CollectionOverviewContainer } from "./collection-overview.styles";
import { selecctCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = () => {
    const collections = useSelector(selecctCollectionsForPreview)

    return (
    <CollectionOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)};
    </CollectionOverviewContainer>
    )
}

export default CollectionOverview;