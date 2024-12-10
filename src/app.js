import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"

const auth = getAuth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new GoogleAuthProvider();

signInBtn.onclick = () => signInWithPopup(auth, provider);


signOutBtn.onclick = () => auth.signOut();


onAuthStateChanged(auth, (user) => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User id:${user.uid}</p>`
  } else {
    whenSignedOut.hidden = false;
    whenSignedIn.hidden = true;
    userDetails.innerHTML = ``;
  }
}); 
