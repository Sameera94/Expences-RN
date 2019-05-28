import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCCr4M2hKBb-fDheL-o-ICAa0rcbvF1p28",
  authDomain: "expenses-74f56.firebaseapp.com",
  databaseURL: "https://expenses-74f56.firebaseio.com",
  projectId: "expenses-74f56",
  storageBucket: "expenses-74f56.appspot.com",
  messagingSenderId: "581742009788",
  appId: "1:581742009788:web:bf1f032a6a406c01"
};

let app = Firebase.initializeApp(config);
export const db = app.database();