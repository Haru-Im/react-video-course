import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

const App = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  console.log("counter -> ", counter.number);

  return (
    <div>
      현재 카운트: {counter.number} <br />
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
