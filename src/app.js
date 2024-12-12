import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";

import { app } from "./firebase/firebaseConfig";

const auth = getAuth(app);

const signInBtns = document.querySelectorAll(".button-google");

const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    signInBtns.forEach((button) => {
      button.onclick = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log("User signed in:", user.displayName);
            window.location.href = "dashboard.html";
          })
          .catch((error) => {
            console.error("Sign-in error:", error.message);
          });
      };
    });
  })
  .catch((error) => {
    console.error("Error setting persistence:", error.message);
  });


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    window.location.href = "dashboard.html";
  } else {
    console.log('No user signed in');
  }
});

