import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTfSZp6-0cnEU6u-G0SP77iXfDdZpvHOM",
  authDomain: "starcade-ea94f.firebaseapp.com",
  projectId: "starcade-ea94f",
  storageBucket: "starcade-ea94f.firebasestorage.app",
  messagingSenderId: "452005790846",
  appId: "1:452005790846:web:ef135231a199a336c1042f",
  measurementId: "G-Z2Q7VKDHG8"
};

export const app = initializeApp(firebaseConfig);

console.log(app);

