import Slider from "../components/Slider";
import { useParams } from "react-router-dom";
import Home from "./Home";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToUserList } from "../redux/action/action";

const gotToBtn = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const InfoPage = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://anil-room-project.herokuapp.com/all_rooms/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSingleData(data);

        console.log(data);
      });
    gotToBtn();
  }, [id]);

  let totalRating = singleData.total_rating;

  let totalimage = singleData.image_url;

  

  const sumWithInitial = totalRating && totalRating.reduce((p, c) => p + c, 0);

   

  let len = 0;

  if (totalRating) {
    len = totalRating.length;
  }

  return (
    <div className=" homeconatiner w-full bg-white  text-center min-h-screen   ">
      <div className="max-w-[1240px] mx-auto  py-10    ">
        <div className="mt-9">
          <Slider totalimage={totalimage} />

          {/*  card Details */}
          <div className=" text-[18px] ">
            <div className=" flex  justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize ">
              <span>Honor Name</span>
              <span>{singleData.honor_name} </span>
            </div>

            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              <span>Category</span>
              <span> {singleData.category} </span>
            </div>
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              {singleData.total_flat > 0 ? (
                <>
                  <span>Total Flat</span>
                  <span> {singleData.total_flat} </span>
                </>
              ) : (
                <>
                  <span>Total Room</span>
                  <span> {singleData.total_room} </span>
                </>
              )}
            </div>
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              {singleData.avilable_flat > 0 ? (
                <>
                  <span>Avilable Flat</span>
                  <span> {singleData.avilable_flat} </span>
                </>
              ) : (
                <>
                  <span>Avilable Room</span>
                  <span>{singleData.avilable_room}</span>
                </>
              )}
            </div>
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize">
              <span>Rent</span>
              <span>
                {" "}
                {singleData.min_rent_price} - {singleData.max_rent_price} ₹{" "}
              </span>
            </div>
            <div className=" flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: capitalize ">
              <span className=" text-white bg-[#388e3c] px-[10px] py-[1px] rounded-[5px] mb-2 ">
                {(sumWithInitial / len).toFixed(1)} ⭐
              </span>
              <span> {sumWithInitial} Ratings </span>
            </div>
            <div className="flex justify-between mx-10 my-2 items-center border-b-[1px] border-[rgb(128,128,128,128)] text-transform: none; ">
              <span>Contact No.</span>
              <span>
                
                <ion-fab left bottom>
                    
                  <a href={`tel:+91${singleData.mobile_no}`} className="button" ion-fab color="light">
                    <ion-icon name="keypad">{singleData.mobile_no}</ion-icon>
                  </a>
                </ion-fab>
              </span>
            </div>

            <div className=" mx-5 my-3 ">
              <p>{singleData.room_details}</p>
            </div>
            <div className="border-t-[1px] border-[rgb(128,128,128,128)] mx-10">
              <button
                onClick={() => dispatch(addToUserList(singleData))}
                className="my-4  w-[100%] md:w-[30%] text-white  "
              >
                ShortList
              </button>
            </div>
          </div>
        </div>
        <Home />
      </div>
    </div>
  );
};

export default InfoPage;
