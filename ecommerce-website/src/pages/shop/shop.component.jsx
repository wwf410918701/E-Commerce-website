import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ContainerCollectionPage from "../../components/collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";


class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionStart } = this.props

        fetchCollectionStart();
    }


    render() {
        const { match, isLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={ContainerCollectionPage} />
            </div>
        )  
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})
  
const mapStateToProps = createStructuredSelector({
    isLoaded: selectIsCollectionsLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);