import {
  ADDNEW,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  DELETE,
  COLORSELECT,
  TOGGLED,
  LOADED,
  EDIT,
} from "./actionTypes";

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};
export const editTodo = (todoID, todoText) => {
  return {
    type: EDIT,
    payload: {
      todoID,
      todoText,
    },
  };
};
export const addNew = (todoText) => {
  return {
    type: ADDNEW,
    text: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelect = (todoId, color) => {
  return {
    type: COLORSELECT,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
