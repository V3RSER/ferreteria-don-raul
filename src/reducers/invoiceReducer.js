import { GENERATE_INVOICE } from "../actions/invoiceAction";

const INITIAL_STATE = {
  invoice: {},
};

const invoice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE_INVOICE: {
      return {
        ...state,
        invoice: action.payload,
      };
    }
    default:
      return state;
  }
};

export default invoice;
