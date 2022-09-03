const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  authorName: "",
  start: 0,
  end: 4,
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.authorName = "";
      state.search = "";
      state.start = 0;
      state.end = 4;
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
      state.authorName = "";
      state.search = "";
      state.start = 0;
      state.end = 4;
    },
    searched: (state, action) => {
      state.search = action.payload;
      state.start = 0;
      state.end = 4;
    },
    reset: (state) => {
      state.search = "";
      state.tags = [];
      state.authorName = "";
      state.start = 0;
      state.end = 4;
    },
    setAuthor: (state, action) => {
      state.search = "";
      state.tags = [];
      state.authorName = action.payload;
      state.start = 0;
      state.end = 4;
    },
    pagination: (state, action) => {
      state.search = "";
      state.tags = [];
      state.authorName = "";
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
  },
});

export default filterSlice.reducer;
export const {
  tagSelected,
  tagRemoved,
  searched,
  reset,
  setAuthor,
  pagination,
} = filterSlice.actions;
