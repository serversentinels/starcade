import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"

const auth = getAuth();


const signInBtn = document.getElementById('signInWithGoogleBtn');

const provider = new GoogleAuthProvider();

signInBtn.onclick = () => signInWithPopup(auth, provider).then((result) => {
  const user = result.user;
  console.log(user);
}).catch((error) => {
  console.log(error.message);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  } else {
    console.log('No user signed in');
  }
}); 
