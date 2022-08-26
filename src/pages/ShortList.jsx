import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../components/shortlistc.css"
import { removeFromUserList } from "../redux/action/action";
const ShortList = () => {
  const shortLi̥stData = useSelector((state) => state.cartData);

  const dispatch = useDispatch();

  //min-h-screen
  return (
    <div className=" homeconatiner w-full bg-black  text-center min-h-screen ">
      <div className="max-w-[1240px] mx-auto px-2  py-10 ">
        {/*  short list  container */}

        {/* <div > */}
          <div className="mt-9 grid px-5 md:px-0  ">
            {shortLi̥stData.length > 0 ? (
              <>
                <table className="table-auto m-1">
                  <thead  >
                    <tr class="even:bg-[#dddddd] ">
                      <th>Room Image</th>
                      <th>Honor Name</th>
                      <th>Location</th>
                      <th>Category</th>
                      <th>Total Room</th>
                      <th>Avilable Room</th>
                      <th>Rating (Users)</th>
                      <th> Rent </th>
                      <th>Contact</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shortLi̥stData.map((item) => (
                      <tr key={item.id} className=" even:bg-[#dddddd] ">
                        <td data-aria-label="Room Image" >
                          <img
                            src={item.image_url[0]}
                            className=" w-40 h-20 "
                            alt="room imag"
                          />
                        </td>
                        <td data-aria-label="Honor Name">{item.honor_name}</td>
                        <td data-aria-label="Location">{item.location}</td>
                        <td data-aria-label="Category">{item.category}</td>

                        {item.total_flat > 0 ? (
                          <td data-aria-label="Total Room"> {item.total_flat} </td>
                        ) : (
                          <td data-aria-label="Total Room">{item.total_room}</td>
                        )}
                        {item.avilable_flat > 0 ? (
                          <td data-aria-label="Avilable Room"> {item.avilable_flat} </td>
                        ) : (
                          <td data-aria-label="Avilable Room">{item.avilable_room}</td>
                        )}

                        <td data-aria-label="Rating">
                          <span className="text-white bg-[#388e3c] px-[10px] py-[1px]  rounded-[5px] mb-2">
                            {(
                              item.total_rating.reduce((p, c) => p + c, 0) /
                              item.total_rating.length
                            ).toFixed(1)}{" "}
                            ⭐
                          </span>
                        </td>
                        <td data-aria-label="Rent">
                          {item.min_rent_price} - {item.max_rent_price}{" "}
                        </td>
                         <td data-aria-label="Contact">
                         <ion-fab left bottom>
                    
                    <a href={`tel:+91${item.mobile_no}`} class="button" ion-fab color="light">
                      <ion-icon name="keypad">+91{item.mobile_no}</ion-icon>
                    </a>
                  </ion-fab>
                         </td>
                        <td data-aria-label="Remove">
                          <button
                            onClick={() =>
                              dispatch(removeFromUserList(item.id))
                            }
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <div>
                <span className="text-3xl"> Nothing shortlisted itmes 😢</span>
                <br />
                <Link className=" text-xl hover:underline" to={"/home"}>
                  Got To Home Page and Shortlist
                </Link>
              </div>
            )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShortList;
