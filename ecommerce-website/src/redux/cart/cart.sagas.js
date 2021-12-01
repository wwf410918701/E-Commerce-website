import { all, call, takeLatest, put} from 'redux-saga/effects' 
import { clearCart } from './cart.actions';
import { userActionTypes } from '../user/user.types';

function* clearCarts() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCarts)
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
}