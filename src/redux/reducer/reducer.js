import {ADD_TO_USER_LIST ,REMOVE_TO_USER_LIST} from "../constant/constant"

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_USER_LIST:
      // add to shortlist data
         let checkD= data && data.find((ele)=>ele.id===action.data.id)
         
          if(checkD){
            alert("already shortlist")
            return [...data];
          }
         
      return [action.data, ...data];
      case REMOVE_TO_USER_LIST:
        // Remove from  shortlist data
        let filterData=data.filter((ele)=> ele.id!==action.id)


        return [...filterData];
      
    default:
      // no case matched
      return data;
  }
};
