import { combineReducers } from "redux";
import inventory from "./inventoryReducer";
import sell from "./sellReducer";

const rootReducers = combineReducers({
  inventory,
  sell,
});

export default rootReducers;
