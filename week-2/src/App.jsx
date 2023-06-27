import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusN, minusOne, plusN, plusOne } from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div>
      현재 카운트: {counter.number} <br />
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            const { value } = e.target;
            setNumber(value ? +value : 0);
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
