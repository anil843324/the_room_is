import React, { useEffect, useState } from "react";
import "../App.css";
import { CirclesWithBar } from 'react-loader-spinner'
import HomeCard from "../components/HomeCard";
import { productList } from "../redux/productAction/productAction";
import { useDispatch, useSelector } from "react-redux";
import Paginaton from "../components/Pagination";

const Home = () => {
  // const [data, setData] = useState([]);

  const dispatch = useDispatch()
  const data = useSelector((state) => state.productData);


  // pagination added
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagi, setPagi] = useState({
    star: 0,
    end: showPerPage,
  });

  const onPaginatonChange = (start, end) => {
    setPagi({ star: start, end });
  };



  useEffect(() => {

    dispatch(productList());

  }, []);



  //min-h-screen
  return (
    <div className=" homeconatiner w-full bg-black  text-center  ">
      <div className="max-w-[1240px] mx-auto px-4 pt-10 ">
        {/*  card  container */}

        {

          !data.length > 0 ? <div className=" grid place-items-center mt-10 h-[66vh]" > <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
          /> </div> : <>

            <div className=" grid  sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-[-0px]   ">

              {data.slice(pagi.star, pagi.end).map((ele) => (
                <div className="mt-4" key={ele.id}>
                  <HomeCard ele={ele} />
                </div>
              ))}


            </div>
            <Paginaton
          showPerPage={showPerPage}
          onPaginatonChange={onPaginatonChange}
          len={data.length}
        />
          </>
        }

      
      </div>
    </div>
  );
};

export default Home;
