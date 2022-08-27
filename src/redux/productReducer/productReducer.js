
import { SET_PRODUCT_LIST  } from "../constant/constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // now added search by user data or existing data
      // console.log("Product list ", action);
      return [...action.data];
    default:
      // no case matched
      return data;
  }
};