import "./App.css";
import { useState } from "react";
import Box1 from "./react-hooks/react.memo/Box1";
import Box2 from "./react-hooks/react.memo/Box2";
import Box3 from "./react-hooks/react.memo/Box3";

const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};

function App() {
  const [count, setCount] = useState(0);
  console.log("app component rendered");

  const onPlusButtonClickHandler = () => {
    setCount(count + 1);
  };

  const onMinusButtonClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusButtonClickHandler}>+</button>
      <button onClick={onMinusButtonClickHandler}>-</button>
      <div style={boxesStyle}>
        <Box1 />

        <Box2 />

        <Box3 />
      </div>
    </>
  );
}

export default App;
