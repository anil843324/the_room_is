import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";

 import {useNavigate} from "react-router-dom"
import { addToUserList } from "../redux/action/action";

const HomeCard = ({ele}) => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    
  

  return (
    <div className=" border rounded-md shadow-lg  mt-5 ">
      <img src={ele.image_url[0]} alt="room img" className="rounded-md h-72 w-[100%]" />

      <div className=" flex flex-col text-[18px]  mx-5 my-2   ">
        <div className="flex  items-center justify-between font-[600]">
          {" "}
          <span>Honor </span> <span>{ele.honor_name}</span>{" "}
        </div>

        <div className="flex  items-center justify-between">
          <span>Category </span>
          <span>{ele.category}</span>
        </div>

        <div className="flex  items-center justify-between  ">
          <span> Location </span>

          <p className=" ">{ele.location.slice(0, 15)}...</p>
        </div>
        <div className="flex  items-center justify-between">
          {" "}
          <span>Rent </span>{" "}
          <span>
            {ele.min_rent_price} - {ele.max_rent_price} ₹
          </span>{" "}
        </div>
        <div className=" flex justify-around my-2 ">
          {/* <button className="w-[90px] my-1 ">Get More</button> */}
          
          <button onClick={()=> navigate(`/infopage/${ele.id}`)}    className="inline-flex items-center    text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-[#E55D87] to-[#5FC3E4] py-2 px-3 rounded-3xl ">
            Get more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
               
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button onClick={()=> { dispatch(addToUserList(ele)) }} className="inline-flex items-center  text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-gradient-to-r from-[#E55D87] to-[#5FC3E4] py-2 px-3 rounded-3xl ">
            ShortList
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
