import { combineReducers } from "redux"

// import { cartData } from "./reducer"

import { cartData } from "../reducer/reducer"
import { productData } from "../productReducer/productReducer"


export default combineReducers({
  
    cartData,
    productData

})


