import Rebase from 're-base';
import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC1DbStl36IvbACKnl6yBDs3cSUHHQpAKw",
    authDomain: "my-first-firebase-5c141.firebaseapp.com",
    databaseURL: "https://my-first-firebase-5c141.firebaseio.com",
    projectId: "my-first-firebase-5c141",
    storageBucket: "my-first-firebase-5c141.appspot.com",
    messagingSenderId: "774781400899"
  };

  const app = Firebase.initializeApp(config);
  const base = Rebase.createClass(app.database());

  export {base};