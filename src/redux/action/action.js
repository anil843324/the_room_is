import {ADD_TO_USER_LIST ,REMOVE_TO_USER_LIST  } from "../constant/constant"

export const addToUserList = (data) => {

  console.log("action called to user list data", data);
  return {
    type: ADD_TO_USER_LIST,
    data,
  };
};

export const removeFromUserList = (id) => {

  console.log("action called to  remove from user list data", id);
  return {
    type: REMOVE_TO_USER_LIST,
    id,
  };
};












