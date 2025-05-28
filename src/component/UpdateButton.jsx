import { useEffect, useRef, useState } from "react";

function UpdateButton({ el, updateValue, setUpdateValue, setTodo }) {
  return (
    <>
      {el.isUpdate === false ? (
        <BeforeUpdate el={el} setTodo={setTodo} />
      ) : (
        <AfterUpdate
          el={el}
          setTodo={setTodo}
        />
      )}
    </>
  );
}

function BeforeUpdate({ el, setTodo }) {
  return (
    <button
      class="bg-green-400 p-2 rounded-lg text-amber-50 hover:bg-green-700"
      onClick={() => {
        setTodo((prev) =>
          prev.map((data) =>
            data.id === el.id ? { ...data, isUpdate: true } : data
          )
        );
      }}
    >
      수정
    </button>
  );
}

function AfterUpdate({ el, setTodo }) {
  const inputRef = useRef(null);
  const [localValue, setLocalValue] = useState(el.content);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleUpdate = () => {
    fetch(`http://localhost:3001/todos/${el.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: localValue,
        isUpdate: false,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((updated) => {
        setTodo((prev) =>
          prev.map((todo) => (todo.id === el.id ? updated : todo))
        );
      })
      .catch((err) => {
        console.error("업데이트 중 오류 발생:", err);
      });
  };


  return (
    <>
      <input
        class="flex-1 p-2 border rounded-md shadow-sm text-center bg-white"
        ref={inputRef}
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
      <button 
      class="bg-green-400 p-2 rounded-lg text-amber-50 hover:bg-green-700"
      onClick={handleUpdate}>수정하기</button>
    </>
  );
}

export default UpdateButton;
