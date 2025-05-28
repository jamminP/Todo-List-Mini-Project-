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
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCreate}>생성</button>
    </>
  );
}

export default CreateButton;