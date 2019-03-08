import * as firebase from 'firebase';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyD4Z18e-Bfnrl5ooqkQRp7LGku21p-h7gc',
  authDomain: 'turn-application.firebaseapp.com',
  databaseURL: 'https://turn-application.firebaseio.com',
  projectId: 'turn-application',
  storageBucket: 'turn-application.appspot.com',
  messagingSenderId: '260270323321'
};

firebase.initializeApp(config);

export default firebase;
