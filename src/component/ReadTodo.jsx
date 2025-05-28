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
          <li
            class="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm mb-3.5"
            key={el.id}
          >
            {el.content}
            <div class="space-x-2">
              {/* #3. Todo 수정 */}
              <UpdateButton
                el={el}
                updateValue={updateValue}
                setUpdateValue={setUpdateValue}
                setTodo={setTodo}
              />
              {/* #4. Todo 삭제 */}
              <DeleteButton setTodo={setTodo} el={el} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReadTodo;
