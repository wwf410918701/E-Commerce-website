import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionFailure(error.message))
    }
    
}

function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export default function* shopSaga() {
    yield all([call(fetchCollectionsStart)])
}