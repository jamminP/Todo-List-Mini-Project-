import { useEffect } from "react";

function CreateButton({ inputValue, setInputValue, todo, setTodo }) {
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const handleCreate = () => {
    const newTodo = {
      content: inputValue,
      isUpdate: false,
    };

    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((createdData) => {
        setTodo((prev) => [...prev, createdData]);
        setInputValue("");
      });
  };

  return (
    <div class="flex gap-2 mb-4">
      <input
        class="flex-1 p-2 border rounded-md shadow-sm text-center"
        placeholder="할 일을 작성하세요."
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
      onClick={handleCreate}
      class="px-4 py-2 bg-blue-500 text-amber-50 rounded-lg hover:bg-blue-700"
      >생성</button>
    </div>
  );
}

export default CreateButton;