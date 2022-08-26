import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './Firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
const ProtectedRoute = (props) => {
    const navigate=useNavigate()
    const  {Component} =props;
    const currentUser=getAuth().currentUser
    // console.log(currentUser)
   let email=  currentUser?.email
    //  console.log("from protected route email ", email);
     let auth2=currentUser && currentUser?.email
      // console.log("email of auth2 from preacted ",auth2)
      
       let auth3=  currentUser?.email.length >0 ? true :false 
        // console.log("auth3",auth3);

      useEffect(()=>{
        if(!currentUser?.email){

          return  navigate("/")
         }

      },[email])
         


  return (
      <div>
         <Navbar/>
         <Component/>
         <Footer/>
      </div>
  )
}

export default ProtectedRoute