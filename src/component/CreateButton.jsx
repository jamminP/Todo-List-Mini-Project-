function CreateButton({ inputValue, setInputValue, todo, setTodo }) {
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* #1. Todo 생성 */}
      <button
        onClick={() => {
          const newTodo = {
            id: Date.now(),
            content: inputValue,
            isUpdate: false,
          };

          setTodo([...todo, newTodo]);
          setInputValue("");
        }}
      >
        생성
      </button>
    </>
  );
}

export default CreateButton;
