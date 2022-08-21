import {
  ADDNEW,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  DELETE,
  COLORSELECT,
  TOGGLED,
} from "./actionTypes";

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
