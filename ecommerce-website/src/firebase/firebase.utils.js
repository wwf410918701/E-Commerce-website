import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAM82GjklMVGtCmhu8YyslE2TsSNnDPA1o",
    authDomain: "ecommerce-db-fc809.firebaseapp.com",
    projectId: "ecommerce-db-fc809",
    storageBucket: "ecommerce-db-fc809.appspot.com",
    messagingSenderId: "17677016743",
    appId: "1:17677016743:web:3aac53873cbe35fc78c582",
    measurementId: "G-CE08M0R2XF"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date()

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                }
            )
        } catch (error) {
            console.log('error when add authenticated user to database'+error.message)
        }
    }
    return userRef;
}