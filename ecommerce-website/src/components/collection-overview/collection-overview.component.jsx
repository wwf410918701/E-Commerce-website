import React from "react";
import { connect } from "react-redux";
import CollectionPreview from '../collection-preview/collection-preview.component'
import { CollectionOverviewContainer } from "./collection-overview.styles";
import { selecctCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)};
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selecctCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);