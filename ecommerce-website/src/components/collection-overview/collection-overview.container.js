import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;