import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addNumber, minusNumber } from "./redux/modules";

function App() {
  const count = useSelector((state) => state.counterReducer.number);
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addNumber(1));
  };
  const handleMinusButtonClick = () => {
    dispatch(minusNumber(1));
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleAddButtonClick}>+</button>
      <button onClick={handleMinusButtonClick}>-</button>
    </div>
  );
}

export default App;
