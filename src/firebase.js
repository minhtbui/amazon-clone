import firebase from 'firebase';

export const firebaseConfig = {
   apiKey: 'AIzaSyCkvaOT1uuceE8DWKcEmT9XkMlW3D2xNwQ',
   authDomain: 'clone-project-a3066.firebaseapp.com',
   databaseURL: 'https://clone-project-a3066.firebaseio.com',
   projectId: 'clone-project-a3066',
   storageBucket: 'clone-project-a3066.appspot.com',
   messagingSenderId: '998931709075',
   appId: '1:998931709075:web:1677816113829af8a9a166',
   measurementId: 'G-JYZFQ11SD3',
};

// set connecting to firebase server
const firebaseApp = firebase.initializeApp(firebaseConfig);

// link to cloud firestore of firebase
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
