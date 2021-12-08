import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import ContainerCollectionPage from "../../components/collection/collection.container";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { ShopPageContainer } from "./shop.styles";


const ShopPage = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart])

    return (
        <ShopPageContainer>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={ContainerCollectionPage} />
        </ShopPageContainer>
    )  
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);