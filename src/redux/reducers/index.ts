import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  count: CounterReducer,
});

export default rootReducer;
