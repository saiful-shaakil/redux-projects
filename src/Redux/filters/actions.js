import { COLOR, STATUS } from "./actionTypes";

export const colorChanged = (color, changeType) => {
  return {
    type: COLOR,
    payload: {
      color,
      changeType,
    },
  };
};

export const statusChanged = (status) => {
  return {
    type: STATUS,
    payload: status,
  };
};
