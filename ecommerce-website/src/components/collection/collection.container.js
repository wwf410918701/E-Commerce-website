import { connect } from "react-redux";
import { compose } from "redux";
import CollectionPage from "../../components/collection/collection.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const ContainerCollectionPage = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default ContainerCollectionPage