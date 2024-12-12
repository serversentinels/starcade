import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

const auth = getAuth(app);
const userTitle = document.getElementById("user-title");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user.displayName);
    userTitle.innerHTML = `Hello, ${user.displayName}!`;
  } else {
    console.log("No user is currently signed in.");
    userTitle.innerHTML = "Welcome, Guest!";
  }
});

