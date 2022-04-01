import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/sellAction";

const INITIAL_STATE = {
  shopingCart: localStorage.getItem("shopingCart")
    ? JSON.parse(localStorage.getItem("shopingCart"))
    : [],
};

const inventory = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let cart = state.shopingCart;
      cart.push({
        product: action.payload.product[0],
        quantity: action.payload.quantity,
      });
      localStorage.setItem("shopingCart", JSON.stringify(cart));
      return {
        ...state,
        shopingCart: cart,
      };
    }
    case REMOVE_PRODUCT: {
      let cart = state.shopingCart.filter(
        (cart) => cart.product.id !== action.payload
      );
      localStorage.setItem("shopingCart", JSON.stringify(cart));
      return {
        ...state,
        shopingCart: cart,
      };
    }

    case UPDATE_PRODUCT: {
      let cart = state.shopingCart.map((cart) =>
        cart.product.id === action.payload.id
          ? { product: cart.product, quantity: action.payload.quantity }
          : { product: cart.product, quantity: cart.quantity }
      );
      localStorage.setItem("shopingCart", JSON.stringify(cart));
      return {
        ...state,
        shopingCart: cart,
      };
    }
    default:
      return state;
  }
};

export default inventory;
