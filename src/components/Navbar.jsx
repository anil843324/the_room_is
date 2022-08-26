import React, { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { productSearch } from "../redux/productAction/productAction";

import logo from "../assets/logo4.jpg";
import mobilelog from "../assets/mobilelogo.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth ,logOut} from "../Firebase";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser=useAuth();
   console.log("email",currentUser?.email);
    const navigate=useNavigate()
  const [toggle, setToggle] = useState(true);
  const [loginToggle, setLoginToggle] = useState(false);

  const [inputData, setInputData] = useState("");

  const handleInput = (input) => {
    setInputData(input);

    
    
  };


  //   using debouncing to call later
     useEffect(() => {
              
          let timeout=setTimeout(()=>{

            dispatch(productSearch(inputData));

          },800)
           
       return ()=> clearTimeout(timeout)
     }, [inputData])
     
    //  login toggle

     


  const handleToggle = () => {
    setToggle(!toggle);
  };

  const logOutHandle = async() => {
      try {
        await logOut()
        navigate("/")
      
      } catch (error) {
         console.log(error)
      }
     
   
  };

  return (
    <div className="w-full  h-[60px] bg-[#000000] fixed  z-10  ">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <img

            onClick={()=>{navigate("/home")}}
            src={logo}
            alt="logo"
            className="h-[30px]  hidden md:flex  md:h-[45px] cursor-pointer "
          />
          {/* <h1 className="text-[#00d8ff] ">DEFI</h1> */}
          <img
           onClick={()=>{navigate("/home")}}
            src={mobilelog}
            alt="logo"
            className="h-[30px] w-[100px] md:hidden  "
          />
        </div>
        <div>
          <input
            type="text"
            value={inputData}
            onChange={(e) => handleInput(e.target.value)}
            className="rounded-md p-1 md:w-96 outline-none"
            placeholder="Search Location"
          />
        </div>

        <div className=" hidden md:flex">
          <ul className="flex text-white items-center">
         
            {/*  shortlist data  */}
            <button  onClick={()=> navigate("/shortlist") }  className="ml-4">
              ShortList
            </button>

            
            
              <button  onClick={() => logOutHandle()} className="ml-4 ">
                Logout
              </button>
             
            <div className=" border-1  bg-[#859398] py-2 px-4 ml-3 rounded-full  ">
            {currentUser?.email.slice(0,1).toUpperCase()}
            </div>

          </ul>
        </div>
        {/* Ham burger */}

        <div className="block md:hidden ">
          {/* <AiOutlineMenu size={30} className="text-white" /> */}
          {toggle ? (
            <AiOutlineMenu
              size={30}
              className="text-white cursor-pointer"
              onClick={() => handleToggle()}
            />
          ) : (
            <AiOutlineClose
              size={30}
              className="text-white cursor-pointer"
              onClick={() => handleToggle()}
            />
          )}
        </div>
        {/* mobile menu */}
        {!toggle ? (
          <div className="  md:hidden w-full   bg-[#000000] text-white absolute top-[60px] left-0  flex justify-center  text-center">
            <ul className="text-[16px]">
             <div>
             <button  onClick={()=> (navigate("/shortlist"),setToggle(!toggle) ) }  className="mt-5  ">
              ShortList
            </button>
             </div>
         
            
                <button onClick={() => logOutHandle()} className="m-8  ">
                  Logout
                </button>
               
              <div className=" border-1  bg-[#859398] py-3 px-6 text-xl  mb-10 ml-14 mr-14 rounded-full  ">
              {currentUser?.email.slice(0,1).toUpperCase()}
              </div>
              
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
