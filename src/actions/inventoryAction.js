import inventoryServices from "../services/streaming/inventoryService";

export const SET_PRODUCTS = "products/SET_PRODUCTS";

export const setProducts = () => async (dispatch) => {
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
