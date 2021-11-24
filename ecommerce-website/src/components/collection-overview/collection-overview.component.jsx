import React from "react";
import { connect } from "react-redux";
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.scss';
import { selectCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)};
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(CollectionOverview);