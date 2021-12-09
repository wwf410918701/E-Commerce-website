import React, { useEffect, lazy, Suspense } from "react";
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { ShopPageContainer } from "./shop.styles";
import Spinner from "../../components/spinner/spinner.component";

const ContainerCollectionPage = lazy(() => import("../../components/collection/collection.container"));
const CollectionOverviewContainer = lazy(() => import("../../components/collection-overview/collection-overview.container"));

const ShopPage = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [fetchCollectionStart])

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={ContainerCollectionPage} />
            </Suspense>
        </ShopPageContainer>
    )  
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);