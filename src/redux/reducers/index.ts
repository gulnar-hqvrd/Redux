import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  count: CounterReducer,
  user:UserReducer
});

export default rootReducer;
