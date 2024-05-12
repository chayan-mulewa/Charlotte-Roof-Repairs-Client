import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCJVqcyirHNSdfZWkp9RF2uhkoQ0sLsa60",
    authDomain: "charlotte-roof-repairs.firebaseapp.com",
    projectId: "charlotte-roof-repairs",
    storageBucket: "charlotte-roof-repairs.appspot.com",
    messagingSenderId: "795003516157",
    appId: "1:795003516157:web:bc2f1e63bdd19a2b3c3a94",
    measurementId: "G-CLX1FJRNF8"
};

const app = initializeApp(firebaseConfig);

export { app };