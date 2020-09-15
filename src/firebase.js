import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrqSsdZy6dyjkpIvIQJjEKfTjBzxhlpFw",
    authDomain: "facebook-346ff.firebaseapp.com",
    databaseURL: "https://facebook-346ff.firebaseio.com",
    projectId: "facebook-346ff",
    storageBucket: "facebook-346ff.appspot.com",
    messagingSenderId: "691515945515",
    appId: "1:691515945515:web:68c597f5828f0175bff06e",
    measurementId: "G-YTJTP5TDTX"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;

  