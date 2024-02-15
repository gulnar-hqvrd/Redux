import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "./redux/actions/CounterActions";

type RootState = any;
type AppDispatch = ThunkDispatch<RootState, void, any>;

function App() {
  const dispatch = useDispatch<AppDispatch>()
const {count} = useSelector ((state:RootState)=>state.count)

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
