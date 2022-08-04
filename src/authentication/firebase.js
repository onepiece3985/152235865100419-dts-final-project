// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjphfh4BZGeoa23hf7H6sJHu8FBWGI1xo",
  authDomain: "belajarreact-87176.firebaseapp.com",
  projectId: "belajarreact-87176",
  storageBucket: "belajarreact-87176.appspot.com",
  messagingSenderId: "953751121465",
  appId: "1:953751121465:web:ceed6a56f7205e58b067e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const regEmailPass = async (email, password) =>{
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.warn("User ",response.user," berhasil daftar dan warnin ");
    }catch(err){
        console.warn(err);
        console.warn("Kode error", err.code);
        console.warn("Pesan error", err.message);
        
    }
};

const logEmailPass = async (email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.warn("Anda warnin sebagai ", userCredential.user);
    }catch(err){
        console.warn(err);
        console.warn("Kode error", err.code);
        console.warn("Pesan error", err.message);
    }
};

const resPass = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        console.warn("Password baru sudah dikirim");
    }catch(err){
        console.warn(err);
    }
};

const outApps = async () => {
    try{
        await signOut(auth);
    }catch (err){
        console.warn(err);
    }
};

export {auth, regEmailPass, logEmailPass, resPass, outApps};