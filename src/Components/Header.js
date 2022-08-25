import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tick from "../images/double-tick.png";
import note from "../images/notes.png";
import plus from "../images/plus.png";
import { allCompleted, clearCompleted } from "../Redux/todos/actions";
import addTodo from "../Redux/todos/thunk/addTodo";
export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    } else {
      window.alert("Please type your todo first.");
    }
  };
  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={note} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
        >
          <img src={plus} alt="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tick} alt="Complete" />
          <span onClick={() => dispatch(allCompleted())}>
            Complete All Tasks
          </span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
}
