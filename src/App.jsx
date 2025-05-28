import { useState } from "react";
import "./App.css";
import CreateButton from "./component/CreateButton";
import ReadTodo from "./component/ReadTodo";

function App() {
  // Todo 생성/조회/수정/삭제 (CRUD) 기능을 구현하세요.
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <CreateButton 
        inputValue = {inputValue} 
        setInputValue = {setInputValue}
        todo={todo}
        setTodo={setTodo}
        />
      <ReadTodo
        inputValue = {inputValue} 
        setInputValue = {setInputValue}
        todo={todo}
        setTodo={setTodo}
        updateValue = {updateValue}
        setUpdateValue = {setUpdateValue}
      />
    </div>
  );
}

export default App;
