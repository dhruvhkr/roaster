import roaster from "../roasterReducer";
import { combineReducers, createStore } from "redux";

const reducer = combineReducers({
  roaster: roaster,
});

const store = createStore(reducer);

export default store;
