import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function ReadTodo({
  setInputValue,
  todo,
  setTodo,
  updateValue,
  setUpdateValue,
}) {
  return (
    <>
      {/* #2. Todo 조회 */}
      <ul>
        {todo.map((el) => (
          <li key={el.id}>
            {el.content}
            {/* #3. Todo 수정 */}
            <UpdateButton
                el = {el}
                updateValue = {updateValue}
                setUpdateValue = {setUpdateValue}
                setTodo = {setTodo}
            />
            {/* #4. Todo 삭제 */}
            <DeleteButton
                setTodo = {setTodo}
                el = {el}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReadTodo;
