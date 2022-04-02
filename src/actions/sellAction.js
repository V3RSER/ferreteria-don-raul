export const ADD_PRODUCT = "sell/ADD_PRODUCT";
export const REMOVE_PRODUCT = "sell/REMOVE_PRODUCT";
export const UPDATE_PRODUCT = "sell/UPDATE_PRODUCT";
export const SET_BUYER = "sell/SET_BUYER";
export const CLEAR_PRODUCT = "sell/CLEAR_PRODUCT";

export const add_product = (product, quantity) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { product: product, quantity: quantity },
  });
};

export const remove_product = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: id,
  });
};

export const update_product = (id, quantity) => async (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCT,
    payload: { id: id, quantity: quantity },
  });
};

export const set_buyer = (buyer) => async (dispatch) => {
  dispatch({
    type: SET_BUYER,
    payload: buyer,
  });
};

export const clear_products = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCT,
  });
};
