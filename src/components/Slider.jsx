import React, { useEffect, useState } from "react";

import {FaGreaterThan , FaLessThan} from     "react-icons/fa"

const Slider = ({totalimage}) => {

   
  //  console.log(!!totalimage && totalimage)
  //  console.log("Slider image from getting in slider page" ,totalimage)
    let slideingimg=  totalimage && totalimage.length  >0 ? totalimage : []
    

    console.log("Slider image  correct" ,slideingimg)
  const [count, setCount] = useState(0);

  const Next = () => {
     console.log("next")
    setCount((prev) => (prev + 1) % slideingimg.length);

  };

  const Back = () => {
    if (count >= 1) {
      setCount((prev) => prev - 1);
    } else {
      setCount(slideingimg.length - 1);
    }
  };

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCount((prev) => (prev + 1) % slideingimg.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container  flex justify-center items-center  ">
        <span
          onClick={() => {
            Back();
          }}
          className=" cursor-pointer relative  p-2 rounded-full left-4  bg-white "
        >
          
          <FaLessThan/>
        </span>

        <img
          src={!!slideingimg && slideingimg[count]}
          alt="slider img"
          className=" h-[200px] rounded-md w-[400px] md:w-full md:h-[350px] "
        />

        <span
          onClick={() => {
            Next();
          }}
          className=" cursor-pointer relative p-2 rounded-full right-4  bg-white  "
        >
        <FaGreaterThan/>
        </span>
      </div>
    </div>
  );
};
  

export default Slider;
