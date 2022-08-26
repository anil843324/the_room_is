import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  PRODUCT_SEARCH,
  SET_PRODUCT_LIST,
  USER_FETCH_FAILED,
  PRODUCT_SET_BY_ID,
  PRODUCT_FIND_BY_ID
} from "../constant/constant";

function* getProducts() {
  
  let data = yield fetch("https://anil-room-project.herokuapp.com/all_rooms");
  data = yield data.json();
  //    now call to send the data to action
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}
function* searchProducts(data) {
  try {
    let filterData = yield fetch(
      `https://anil-room-project.herokuapp.com/all_rooms?q=${data.query} `
    );
    filterData = yield filterData.json();
    //    now call to send the data to action
    console.log("action is called ", filterData);
    yield put({
      type: SET_PRODUCT_LIST,
      data: filterData,
    });
  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}

function* searchFindById(singleProductId) {
  try {
    let singleProduct = yield fetch(
      `https://anil-room-project.herokuapp.com/all_rooms/${singleProductId} `
    );
    singleProduct = yield singleProduct.json();
    //    now call to send the data to action
    console.log("action is called ", singleProduct);
    yield put({
      type: PRODUCT_SET_BY_ID,
     singleProduct,
    });
  } catch (e) {
    yield put({ type: USER_FETCH_FAILED, message: e.message });
  }
}



function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(PRODUCT_SEARCH, searchProducts);

  yield takeEvery(PRODUCT_FIND_BY_ID, searchFindById);
}

export default productSaga;
