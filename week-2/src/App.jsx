import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // 여기에서 store에 접근하여 counter의 값을 읽어올 때 => useSelector
  // 여기서 state : 중앙저장소 전체의 state
  const data = useSelector((state) => state);

  //counter만 가지고 오고 싶을 때
  const counter = useSelector((state) => state.counter);

  //dispatch 가져오기
  const dispatch = useDispatch();

  console.log("counter -> ", counter.number);

  return (
    <div>
      현재 카운트: {counter.number} <br />
      <button
        onClick={() => {
          //+1을 해주는 로직
          dispatch({
            type: "PLUS_ONE",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS_ONE",
          });
        }}
      >
        -
      </button>
    </div>
  );
};

export default App;
