import React from "react";
import './collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ match, collection }) => {
    console.log(match)
    console.log(collection)
    return (
        <div className='collection-page'>
            <h2>collection PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)