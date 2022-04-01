import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import sell from "./sellReducer";
import invoice from "./invoiceReducer";
import client from "./clientReducer";

const rootReducers = combineReducers({
  inventory,
  sell,
  invoice,
  client,
});

export default rootReducers;
