import React, { useState } from "react";
import "./loginsignu.css";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login ,googeSignIn} from "../Firebase";
import destopLogo from "../assets/destopLogo.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch (err) {
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

  const handleWithGoogleSignIn = async () => {
    try {
      await googeSignIn()
       .then((r) => console.log(r))
       .catch((e)=> console.log(e))
      navigate("/home");
    } catch (err) {
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
      <div className="Auth_container h-[100vh]  flex flex-col gap-4 items-center md:flex-row ">

        <div  className=" flex items-center justify-center "  >
            <img src={destopLogo}  alt="destop log" className="w-[80%]   mt-5 rounded-xl "    />
        </div>
        <div className="Auth_sContainer h-[380px] ">
          <h2 className="text-xl font-[600]">Sign into your account</h2>
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
                handleLogin();
              }}
            >
              Sign In
            </button>
          </div>

          <div className="Boder"></div>

          <GoogleButton className="singWithGoogle" onClick={() => {handleWithGoogleSignIn()}} />

          <span>
            Don't have an account ?<Link  className="underline text-blue-500" to={"/signup"}>Sign up</Link>
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
    </>
  );
};

export default Login;
