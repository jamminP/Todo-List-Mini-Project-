import { useState } from "react";
import "./App.css";
import CreateButton from "./component/CreateButton";
import ReadTodo from "./component/ReadTodo";
import NowTime from "./component/NowTime";
import WiseSaying from "./component/WiseSaying";

function App() {
  // Todo 생성/조회/수정/삭제 (CRUD) 기능을 구현하세요.
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div class="bg-white shadow-md rounded-lg w-full max-w-xl p-6">
        <NowTime class="flex text-sm text-gray-500 mb-4" />
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-8">To Do List</h1>
        <WiseSaying />
        <CreateButton
          class="mt-6"
          inputValue={inputValue}
          setInputValue={setInputValue}
          todo={todo}
          setTodo={setTodo}
        />
        <ReadTodo
          inputValue={inputValue}
          setInputValue={setInputValue}
          todo={todo}
          setTodo={setTodo}
          updateValue={updateValue}
          setUpdateValue={setUpdateValue}
        />
      </div>
    </div>
  );
}

export default App;
