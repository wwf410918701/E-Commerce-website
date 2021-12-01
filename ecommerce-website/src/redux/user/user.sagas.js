import { auth, googleProvider } from "../../firebase/firebase.utils";
import { all, call, put } from "@redux-saga/core/effects";
import { userActionTypes } from "./user.types";
import { takeLatest } from "@redux-saga/core/effects";
import { createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure } from "./user.actions";

function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapShot = yield userRef.get();
        yield put( signInSuccess({ id: userSnapShot.id,...userSnapShot.data() }) )
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password} }) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

export function* signUpUser({ payload: { email, password, displayName } }) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        const userRef = yield createUserProfileDocument(user, { displayName })
        const userSnapShot = yield userRef.get();
        yield put( signInSuccess({ id: userSnapShot.id,...userSnapShot.data() }) )
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser)
}

export default function* userSaga() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart)])
}