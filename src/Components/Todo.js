import { useState } from "react";
import { useDispatch } from "react-redux";
import cancelImage from "../images/cancel.png";
import deleteTodo from "../Redux/todos/thunk/deleteTodo";
import updateColorStatus from "../Redux/todos/thunk/updateColorStatus";
import updateTodoStatus from "../Redux/todos/thunk/updateTodoStatus";
import updateTodoText from "../Redux/todos/thunk/updateTodoText";

export default function Todo({ todo }) {
  const [editText, setEditText] = useState(false);
  const [inputText, setInputText] = useState(todo.text);
  const dispatch = useDispatch();

  const { text, id, completed, color } = todo;

  const handleStatusChange = (todoId) => {
    dispatch(updateTodoStatus(todoId, completed));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(updateColorStatus(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleUpdateTodoText = (e) => {
    e.preventDefault();
    dispatch(updateTodoText(id, inputText));
    setEditText(!editText);
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1`}>
        {!editText && text}{" "}
        {editText && (
          <form>
            <input
              type="text"
              className="border border-black px-2"
              defaultValue={text}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <input
              type="submit"
              value="Submit"
              className="hidden"
              onClick={handleUpdateTodoText}
            />
          </form>
        )}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-3.5 cursor-pointer`}
        onClick={() => setEditText(!editText)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
        </svg>
      </div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
