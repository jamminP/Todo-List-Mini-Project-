function DeleteButton({setTodo, el}) {
  return (
    <>
      <button
        onClick={() => {
          setTodo((prev) => prev.filter((filtered) => filtered.id !== el.id));
        }}
      >
        삭제
      </button>
    </>
  );
}

export default DeleteButton;
