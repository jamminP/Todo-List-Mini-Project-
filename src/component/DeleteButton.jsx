function DeleteButton({ setTodo, el }) {
  const handleDelete = () => {
    fetch(`http://localhost:3001/todos/${el.id}`, {
      method: "Delete",
    })
    .then(() => {
        setTodo((prev) => prev.filter((item) => item.id !== el.id));
      })
      .catch((err) => console.error("삭제 중 오류:", err));
  };

  return (
    <>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}

export default DeleteButton;
