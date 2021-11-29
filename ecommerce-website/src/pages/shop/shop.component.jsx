import React, { Component } from "react";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from "../../components/collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    unSubscribeFromSnapshot = null;

    state = {
        loading: true
    }

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
        this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
    }


    render() {
        const { match } = this.props;
        const { loading } = this.state
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={
                    props => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)}
                />
                <Route path={`${match.path}/:collectionId`} render={
                    props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)
                } />
            </div>
        )  
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
    

export default connect(null, mapDispatchToProps)(ShopPage);