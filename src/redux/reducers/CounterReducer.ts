import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../actions/types";
import { CounterState } from "../types/actionTypes";

const initialState: CounterState = {
  count: 0,
};

const CounterReducer = (state = initialState, action: any): CounterState => {
  console.log("Counter Reducer");

  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      default:
      return state
  }
};

export default CounterReducer
