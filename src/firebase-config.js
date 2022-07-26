//old method
import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyARMtOjQl91mfPYGNgpYWvlbVK83Xcj444",
  authDomain: "ugc-grievance.firebaseapp.com",
  projectId: "ugc-grievance",
  storageBucket: "ugc-grievance.appspot.com",
  messagingSenderId: "583121800457",
  appId: "1:583121800457:web:7d18065f71db04381b17d8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };

//new method
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// // import firebase from 'firebase';
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC9YV7mF9PcwYkCEyFyU6a-PdOl3HUWTPg",
//   authDomain: "websitefirebase-ca9f3.firebaseapp.com",
//   databaseURL: "https://websitefirebase-ca9f3.firebaseio.com",
//   projectId: "websitefirebase-ca9f3",
//   storageBucket: "websitefirebase-ca9f3.appspot.com",
//   messagingSenderId: "468542671800",
//   appId: "1:468542671800:web:70e3b62757d23cb248dd4d",
//   measurementId: "G-57PPQ18TQK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const db = getFirestore(app);



//how to use
// import { db, auth, storage } from "../firebase-config";
// import { useAuthState } from 'react-firebase-hooks/auth'
// https://github.com/jaimit25/react_firebase_notes/blob/master/src/components/Contact.js