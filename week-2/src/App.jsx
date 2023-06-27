import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  // 여기에서 store에 접근하여 counter의 값을 읽어올 때 => useSelector
  // 여기서 state : 중앙저장소 전체의 state

  //counter만 가지고 오고 싶을 때
  const counterStore = useSelector((state) => state.counter);
  console.log(counterStore);

  return <div>Redux</div>;
};

export default App;
