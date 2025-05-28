import { useState } from "react";
import "./App.css";

function App() {
  // Todo 생성/조회/수정/삭제 (CRUD) 기능을 구현하세요.
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}/>
      {/* #1. Todo 생성 */}
      <button
        onClick={() => {
          const newTodo = {
            id: Date.now(),
            content: inputValue,
          };

          setTodo([...todo, newTodo]);
          setInputValue("");
        }}
      >
        생성
      </button>
      {/* #2. Todo 조회 */}
      <ul>
        {todo.map((el) => (
          <li key={el.id}>{el.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
