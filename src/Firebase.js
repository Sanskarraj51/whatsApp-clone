import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUMe8iMMpgUrMQI9LYo97IUAuV8sSeXUc",
    authDomain: "whats-app-clone-6565b.firebaseapp.com",
    projectId: "whats-app-clone-6565b",
    storageBucket: "whats-app-clone-6565b.appspot.com",
    messagingSenderId: "55182830141",
    appId: "1:55182830141:web:9ffc87996029d9353e9854",
    measurementId: "G-F95YBMW501"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
    const db = firebaseapp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();


    export {auth , provider};
    export default db ;