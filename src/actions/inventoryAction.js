import inventoryServices from "../services/streaming/inventoryService";

export const SET_PRODUCTS = "products/SET_PRODUCTS";
export const REDUCE_STOCK = "products/REDUCE_STOCK";

export const set_products = () => async (dispatch) => {
  try {
    await inventoryServices.getProducts().then(function (response) {
      dispatch({
        type: SET_PRODUCTS,
        payload: response.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const reduce_stock = (id, quantity) => async (dispatch) => {
  console.log("id: " + id + " q: " + quantity)
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
