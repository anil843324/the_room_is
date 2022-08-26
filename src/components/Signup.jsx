import React, { useState } from "react";
import "./loginsignu.css";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../Firebase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import destopLogo from "../assets/destopLogo.jpg";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async() => {
   
          try {
              await signup(email, password)
              navigate("/")

          } catch (error) {
            toast.error(" Wrong Email and Password!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

          }




  };

  return (
    <>
      <div className="Auth_container h-[100vh]  flex flex-col gap-4 items-center md:flex-row">
      <div  className=" flex items-center justify-center "  >
            <img src={destopLogo}  alt="destop log" className="w-[80%]   mt-5 rounded-xl "    />
        </div>
        <div className="Auth_sContainer h-[320px]">
          <h2 className="text-xl font-[600]">Sign up your account </h2>

          <div className="inputDiv">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleSignup();
              }}
            >
              Sign up
            </button>
          </div>

          <div className="Boder"></div>

          <span>
            Already have an account ?<Link  className="underline text-blue-500" to={"/"}>Log In</Link>
          </span>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Signup;
