
import { initializeApp } from "firebase/app";
import { getAuth
,createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut,
GoogleAuthProvider,
signInWithPopup,


} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBKkN1C0TuVgLExVrottd9aorH1ksHckH0",
  authDomain: "react-authentication-a2980.firebaseapp.com",
  projectId: "react-authentication-a2980",
  storageBucket: "react-authentication-a2980.appspot.com",
  messagingSenderId: "118093004624",
  appId: "1:118093004624:web:edcf562cb0676854433655",
  measurementId: "G-9RK5S6Z834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const dp=getFirestore(app);
 // authentication
 export const auth=getAuth(app);

export function signup(email,password){

   return createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){

  return signInWithEmailAndPassword(auth,email,password)
}

export function googeSignIn(){
 
   const  googleAuthProvider = new GoogleAuthProvider()

   return signInWithPopup(auth,googleAuthProvider)
}

export function logOut(){

  
    signOut(auth).then((e)=>  console.log(e))
    .catch((e)=> console.log(e))
}




// custom Hook

export   function useAuth(){

     
      console.log(auth.currentUser)
       const currentUser=  onAuthStateChanged(auth, user =>   user)

    
     
    return  auth.currentUser
}

