import inventoryServices from "../services/streaming/inventoryService";
import { LOADED, LOADING } from "../actions/viewAction";

export const SET_PRODUCTS = "products/SET_PRODUCTS";
export const REDUCE_STOCK = "products/REDUCE_STOCK";

export const set_products = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    await inventoryServices.getProducts().then(function (response) {
      dispatch({
        type: SET_PRODUCTS,
        payload: response.data,
      });
      dispatch({
        type: LOADED,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const reduce_stock = (id, quantity) => async (dispatch) => {
  try {
    await inventoryServices.reduceStock(id, quantity).then(function (response) {
      dispatch({
        type: REDUCE_STOCK,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
