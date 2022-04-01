import { combineReducers } from "redux";
import inventory from "./inventoryReducer";

const rootReducers = combineReducers({
  inventory,
});

export default rootReducers;
