import { LOADED, LOADING } from "../actions/viewAction";

const INITIAL_STATE = {
  loading: false,
};

const view = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING: {
      return { loading: true };
    }
    case LOADED: {
      return { loading: false };
    }
    default:
      return state;
  }
};

export default view;
