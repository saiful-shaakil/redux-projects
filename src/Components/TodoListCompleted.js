import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../Redux/todos/thunk/fetchTodos";
import Todo from "./Todo";
import TodoComplete from "./TodoComplete";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => todo.completed)
        .map((todo) => (
          <TodoComplete todo={todo} key={todo.id} />
        ))}
    </div>
  );
}
