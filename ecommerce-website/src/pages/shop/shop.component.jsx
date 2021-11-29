import React, { Component } from "react";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from "../../components/collection/collection.component";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props

        fetchCollectionStartAsync();
    }


    render() {
        const { match, isLoaded } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={
                    props => (<CollectionOverviewWithSpinner isLoading={!isLoaded} {...props} />)}
                />
                <Route path={`${match.path}/:collectionId`} render={
                    props => (<CollectionPageWithSpinner isLoading={!isLoaded} {...props}/>)
                } />
            </div>
        )  
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
  
const mapStateToProps = createStructuredSelector({
    isLoaded: selectIsCollectionsLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);