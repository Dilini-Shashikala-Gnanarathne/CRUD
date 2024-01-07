import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyACjhjF2xCh-5Pwd3SWxv8wlWVGOKR3Fuo",
  
    authDomain: "crud-dd5cb.firebaseapp.com",
  
    projectId: "crud-dd5cb",
  
    storageBucket: "crud-dd5cb.appspot.com",
  
    messagingSenderId: "627534072631",
  
    appId: "1:627534072631:web:a8b062e3fbf967c0bf68b2"
  
  };
  
  const firebaseDB= firebase.initializeApp(firebaseConfig);
  export default firebaseDB().ref();
  