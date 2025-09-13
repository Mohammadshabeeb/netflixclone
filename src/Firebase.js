import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {  toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyDQmW4D0bw3rLsqAht9c8YNNU0OZCDhfL4",
  authDomain: "netflix-clone2-537e6.firebaseapp.com",
  projectId: "netflix-clone2-537e6",
  storageBucket: "netflix-clone2-537e6.appspot.com", 
  messagingSenderId: "1057941831659",
  appId: "1:1057941831659:web:2898c9514715cc047563ae",
  measurementId: "G-BJ7S18VSPH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);

    toast.error(error.code.split('/')[1].split('-').join(' '));

    
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!"); // ✅ success message
  } catch (error) {
    console.error(error);
    const message = errorMessages[error.code] || "Something went wrong. Please try again.";
    toast.error(message); // ✅ custom error message
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
