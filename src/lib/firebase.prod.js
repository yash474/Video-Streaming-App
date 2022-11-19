import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from "../seed";


// need config  
const config = {
    apiKey: "AIzaSyCzBxWhCwMFO1hTMpXH4NuYIUtrdYcQOuY",
    authDomain: "netflix-ykp.firebaseapp.com",
    projectId: "netflix-ykp",
    storageBucket: "netflix-ykp.appspot.com",
    messagingSenderId: "618286995654",
    appId: "1:618286995654:web:78a2c60e62b375a4ad5fc7"
};

const firebase = Firebase.initializeApp(config);

// seed the database  :: once you have populated the database (only run once!), re-comment this so you don't get duplicate data
// 💀💀 DANGER 💀💀-> running below seed database multiple times will cause duplicate db entries
// seedDatabase( firebase );

export { firebase };
