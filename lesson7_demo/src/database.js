// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXQy_l26cVpfdAdaLFdUvJ6adwRxRHBU",
  authDomain: "pokedexapp-2540c.firebaseapp.com",
  databaseURL: "https://pokedexapp-2540c-default-rtdb.firebaseio.com",
  projectId: "pokedexapp-2540c",
  storageBucket: "pokedexapp-2540c.appspot.com",
  messagingSenderId: "793316458362",
  appId: "1:793316458362:web:585027c696225361f960c3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
