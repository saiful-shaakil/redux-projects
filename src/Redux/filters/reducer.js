import { STATUS, COLOR } from "./actionTypes";
const initialState = {
  status: "All",
  colors: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case COLOR:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((exist) => exist !== color),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
