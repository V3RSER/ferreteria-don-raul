import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import sell from "./sellReducer";
import invoice from "./invoiceReducer";
import client from "./clientReducer";
import view from "./viewReducer";

const rootReducers = combineReducers({
  inventory,
  sell,
  invoice,
  client,
  view,
});

export default rootReducers;
