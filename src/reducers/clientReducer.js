import { SET_CLIENTS } from "../actions/clientAction";
import { ADD_CLIENT } from "../actions/clientAction";

const INITIAL_STATE = {
  clients: [],
};

const invoice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CLIENTS: {
      return {
        ...state,
        clients: action.payload,
      };
    }
    case ADD_CLIENT: {
      let newClients = state.clients.push(action.payload);
      return {
        ...state,
        clients: newClients,
      };
    }
    default:
      return state;
  }
};

export default invoice;
