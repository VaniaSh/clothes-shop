import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCnKC3uR7SNyX0xvQeEN6OzuBP0LVNGAmI",
    authDomain: "clother-shop-61cd2.firebaseapp.com",
    projectId: "clother-shop-61cd2",
    storageBucket: "clother-shop-61cd2.appspot.com",
    messagingSenderId: "519035285019",
    appId: "1:519035285019:web:254544e88c1c262ed712be",
    measurementId: "G-PFQVB1903L"
};

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get()


    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }
    return userRef
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;