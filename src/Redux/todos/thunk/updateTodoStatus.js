import { toggled } from "../actions";

const updateTodoStatus = (todoId, completeStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !completeStatus,
      }),
      headers: { "content-type": "application/json" },
    });
    const todo = await response.json();
    dispatch(toggled(todo.id));
  };
};

export default updateTodoStatus;
