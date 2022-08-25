import { editTodo } from "../actions";

const updateTodoText = (todoId, todoText) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: todoText,
      }),
      headers: { "content-type": "application/json" },
    });
    const todo = await response.json();
    dispatch(editTodo(todo.id, todo.text));
  };
};

export default updateTodoText;
