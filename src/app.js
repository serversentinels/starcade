import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

import { app } from "./firebase/firebaseConfig";

const auth = getAuth(app);
const db = getFirestore(app);
const signInBtns = document.querySelectorAll(".button-google");

const provider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    signInBtns.forEach((button) => {
      button.onclick = () => {
        signInWithPopup(auth, provider)
          .then(async (result) => {
            const user = result.user;
            console.log("User signed in:", user.displayName);

            console.log("Trying to write user data to Firestore");
            const docRef = doc(db, "users", user.uid);
            try {
              const docSnapshot = await getDoc(docRef);

              if (docSnapshot.exists()) {
                console.log("Document already exists:", docSnapshot.data());
              } else {
                const userData = {
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  exp: 0,
                  provider: "google"
                };

                console.log("Writing new user data to Firestore");
                await setDoc(docRef, userData);
                console.log("User data written to Firestore");
              }

              // Redirect to dashboard after Firestore operation
              window.location.href = "dashboard.html";

            } catch (error) {
              console.error("Error handling Firestore document:", error);
            }
          }).catch((error) => {
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
    //window.location.href = "dashboard.html";
  } else {
    console.log('No user signed in');
  }
});

