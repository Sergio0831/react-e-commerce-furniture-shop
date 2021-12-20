import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR
} from "../actions";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        isOpen: true
      };
    case SIDEBAR_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case GET_PRODUCTS_BEGIN:
      return {
        ...state,
        products_loading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        products_error: true
      };
    case GET_SINGLE_PRODUCT_BEGIN:
      console.log(action);
      break;
    case GET_SINGLE_PRODUCT_SUCCESS:
      console.log(action);
      break;
    case GET_SINGLE_PRODUCT_ERROR:
      console.log(action);
      break;
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
  return state;
};

export default products_reducer;
