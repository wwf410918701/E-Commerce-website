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

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
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

export const addCollectionAndDocuments = async(collectionKey, ObjectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    ObjectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export const convertCollectionsSnapshotToMap = collectionSnapshot => {
    const tranformedCollection = collectionSnapshot.docs.map(docSnapShot => {
        const { title, items } = docSnapShot.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapShot.id,
            title,
            items
        }
    })

    return tranformedCollection.reduce(( accumulator, collection ) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}
