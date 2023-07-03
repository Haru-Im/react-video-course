import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState({
    // id는 자동으로 붙여줄 것이기 때문에 굳이 없어도 됨
    title: "",
  });

  const [targetId, setTargetId] = useState("");
  const [content, setContent] = useState("");

  console.log(todos);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    postFormData();
  };

  const postFormData = async () => {
    const { data } = await axios.post(
      "http://localhost:3001/todos",
      inputValue
    );
    setTodos([...todos, data]);
  };

  const onDeleteButtonClickHandler = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdateButtonClickHandler = async () => {
    await axios.patch(`http://localhost:3001/todos/${targetId}`, {
      title: content,
    });

    setTodos(
      todos.map((item) => {
        return item.id === Number(targetId)
          ? { ...item, title: content }
          : item;
      })
    );
  };

  useEffect(() => {
    // db로부터 값 가져오기
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정 영역 */}
        <input
          type="text"
          placeholder="수정할 id"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonClickHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/* input 영역 */}
        <form onSubmit={onSubmitFormHandler}>
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => setInputValue({ title: e.target.value })}
          />
          <button>추가</button>
        </form>
      </div>
      <div>
        {/* data 영역 */}
        {todos?.map((item) => {
          return (
            <div key={item.id} style={{ display: "flex" }}>
              <div>
                {item.id} : {item.title}
              </div>
              <button onClick={() => onDeleteButtonClickHandler(item.id)}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
