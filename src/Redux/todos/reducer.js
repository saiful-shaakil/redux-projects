import {
  ADDNEW,
  DELETE,
  CLEARCOMPLETED,
  ALLCOMPLETED,
  TOGGLED,
  COLORSELECT,
} from "./actionTypes";

const initialState = [
  {
    id: 1,
    text: "Solve 10 math problems.",
    completed: true,
  },
  {
    id: 2,
    text: "Solve 10 physics questions.",
    completed: false,
    color: "red",
  },
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // to add new todo
    case ADDNEW:
      return [
        ...state,
        {
          id: state.length + 1,
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
