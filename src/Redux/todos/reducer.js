import {
  ADDNEW,
  DELETE,
  CLEARCOMPLETED,
  ALLCOMPLETED,
  TOGGLED,
  COLORSELECT,
  LOADED,
  EDIT,
} from "./actionTypes";
const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // to load todos from db
    case LOADED:
      return action.payload;
    // to add new todo
    case ADDNEW:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.text,
          completed: false,
        },
      ];
    // to toogle todo between it is completed or not
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    // to update todo text
    case EDIT:
      const { todoID, todoText } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoID) {
          return todo;
        }
        return {
          ...todo,
          text: todoText,
        };
      });
    // to select the color of the todo which indicated the todo is completed or not
    case COLORSELECT:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });
    // to delete todo
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    // to mark all the todos are completed
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    // to return all the uncompleted todos
    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;
