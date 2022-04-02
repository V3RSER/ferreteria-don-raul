import { GENERATE_INVOICE, SET_INVOICES } from "../actions/invoiceAction";

const INITIAL_STATE = {
  invoice: {},
  invoices: [],
};

const invoice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GENERATE_INVOICE: {
      return {
        ...state,
        invoice: action.payload,
      };
    }
    case SET_INVOICES: {
      return {
        ...state,
        invoices: action.payload,
      };
    }
    default:
      return state;
  }
};

export default invoice;
