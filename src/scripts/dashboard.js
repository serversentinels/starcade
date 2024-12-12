import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, collection, doc, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);
const userTitle = document.getElementById("user-title");
const userExp = document.getElementById("user-exp");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // if user exists then it is promised that it's corresponding user data will 
    // also exist in firestore
    // get the user data from getFirestore

    const collectionRef = collection(db, "users");
    const userDocRef = doc(collectionRef, user.uid);

    onSnapshot(collectionRef, (data) => {
      console.log("Data changed:", data);
      getDoc(userDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            userExp.innerHTML = `Current exp: ${userData.exp}`;
          } else {
            console.error("User data not found.");
          }
        })
        .catch((error) => {
          console.error("Error getting user data:", error);
        });

    });

    console.log("User is signed in:", user.displayName);
    userTitle.innerHTML = `Hello, ${user.displayName}!`;
  } else {
    console.log("No user is currently signed in.");
    userTitle.innerHTML = "Welcome, Guest!";
  }
});

