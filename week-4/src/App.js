import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  useEffect(() => {
    // db로부터 값 가져오기
    fetchTodos();
  }, []);

  return (
    <div>
      {todos?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
