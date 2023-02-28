import { initializeApp, firebase } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBVWJUeC9QQ3wZe7J668l5hXMTqMeREKu8",
    authDomain: "mohammedabdullahportfolio.firebaseapp.com",
    databaseURL: "https://mohammedabdullahportfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mohammedabdullahportfolio",
    storageBucket: "mohammedabdullahportfolio.appspot.com",
    messagingSenderId: "907768470039",
    appId: "1:907768470039:web:dba10a24575fa410499a52"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
export { app, database };