import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCErIk5CFGWMlLfAKoAmM1IAAT1lcVvrqk",
  authDomain: "facebook-clone-e9c1d.firebaseapp.com",
  databaseURL: "https://facebook-clone-e9c1d.firebaseio.com",
  projectId: "facebook-clone-e9c1d",
  storageBucket: "facebook-clone-e9c1d.appspot.com",
  messagingSenderId: "115624668251",
  appId: "1:115624668251:web:0987231747bf4e393e237e",
  measurementId: "G-L30EYXTE56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
