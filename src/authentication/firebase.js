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
        // console.log("User ",response.user," berhasil daftar dan login ");
        alert("User ",response.user," berhasil daftar dan login ");
    }catch(err){
        console.log(err);
        console.log("Kode error", err.code);
        console.log("Pesan error", err.message);
        
    }
};

const logEmailPass = async (email,password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Anda login sebagai ", userCredential.user);
    }catch(err){
        console.log(err);
        console.log("Kode error", err.code);
        console.log("Pesan error", err.message);
    }
};

const resPass = async (email) => {
    try{
        await sendPasswordResetEmail(auth, email);
        console.log("Password baru sudah dikirim");
    }catch(err){
        console.log(err);
    }
};

const outApps = async () => {
    try{
        await signOut(auth);
    }catch (err){
        console.log(err);
    }
};

export {auth, regEmailPass, logEmailPass, resPass, outApps};