import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);
const userTitle = document.getElementById("user-title");
const userExp = document.getElementById("user-exp");
const plusStatus = document.getElementById("plus-status");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // if user exists then it is promised that it's corresponding user data will 
    // also exist in firestore
    // get the user data from getFirestore

    const collectionRef = collection(db, "users");
    const userDocRef = doc(collectionRef, user.uid);
    onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        userExp.innerHTML = `Current exp: ${data.exp}`;
        const plus = data.plus;
        if (plus) {
          plusStatus.innerHTML = "Plus Member";
        } else {
          plusStatus.innerHTML = "Regular Member";
        }

      } else {
        console.log("User data does not exist in firestore.");
      }
    });
    console.log("User is signed in:", user.displayName);
    userTitle.innerHTML = `Hello, ${user.displayName}!`;
  } else {
    console.log("No user is currently signed in.");
    userTitle.innerHTML = "Welcome, Guest!";
  }
});

