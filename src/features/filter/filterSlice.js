const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  search: "",
  type: "all",
  start: 0,
  end: 10,
};

const filterSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.search = action.payload;
      state.start = 0;
      state.end = 10;
      state.type = "all";
    },
    pagination: (state, action) => {
      state.search = "";
      state.type = "all";
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
    filterType: (state, action) => {
      state.type = action.payload;
      state.start = 0;
      state.end = 10;
    },
  },
});

export default filterSlice.reducer;
export const { searched, pagination, filterType } = filterSlice.actions;
