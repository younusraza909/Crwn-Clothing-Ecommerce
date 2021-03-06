import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAahQlzYbl0FjyA93xpeQ5CY1FHUiyOI7s",
  authDomain: "crwn-clothing-db-f2925.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-f2925.firebaseio.com",
  projectId: "crwn-clothing-db-f2925",
  storageBucket: "crwn-clothing-db-f2925.appspot.com",
  messagingSenderId: "365432552277",
  appId: "1:365432552277:web:99defa3c69e4a0afc80ddc",
  measurementId: "G-SLJLKDTDHY",
};

//Function to get user that is return from authentication library and store it in dabase firestore

//the userAuth passed here is the object that we get back from firebase on google signin
export const createUserProfileDocument = async (userAuth, otherProp) => {
  if (!userAuth) return;
  //will get user ref and will than use get to get snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...otherProp,
      });
    } catch (error) {
      console.log("Error creating USer", error.message);
    }
  }

  return userRef;
  //this will return userRef for Future Refernece
};

/////////////////////////////////////////////////////////////

// //To Add Shop Data To Firebase
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   //bactchRight is a way to batch all code in one place and then execute it if there will be error in halfway all will be terminated
//   const batch = firestore.batch();

//   objectsToAdd.forEach((obj) => {
//     //will create a doc refernce with unique id
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   //will fireoff batch request
//   return await batch.commit();
// };
//////////////////////////////////////////////////////////////

//Convering Collection into organized form
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting google signin utilitis
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
