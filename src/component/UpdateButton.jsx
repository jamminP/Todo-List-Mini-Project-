import { useEffect, useRef } from "react";

function UpdateButton({ el, updateValue, setUpdateValue, setTodo }) {
  return (
    <>
      {el.isUpdate === false ? (
        <BeforeUpdate
            el = {el}
            setTodo = {setTodo}
        />
      ) : (
        <AfterUpdate
            updateValue = {updateValue} 
            setUpdateValue = {setUpdateValue}
            el = {el}
            setTodo = {setTodo}
        />
      )}
    </>
  );
}

function BeforeUpdate({el, setTodo}){
    return (
        <button
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
    )
}

function AfterUpdate({updateValue, setUpdateValue, el, setTodo}){
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return(
        <>
          <input
            ref={inputRef}
            type="text"
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)}
          />
          <button
            onClick={() =>
              setTodo((prev) =>
                prev.map((data) =>
                  data.id === el.id
                    ? { ...data, content: updateValue, isUpdate: false }
                    : data
                )
              )
            }
          >
            수정하기
          </button>
        </>
    )
}

export default UpdateButton;
