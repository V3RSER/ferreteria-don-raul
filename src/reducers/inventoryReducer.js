import { SET_PRODUCTS } from "../actions/inventoryAction";

const INITIAL_STATE = {
  products: [],
};

const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export default inventory;
