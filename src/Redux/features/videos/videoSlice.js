import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";
const initialState = {
  videos: [],
  loading: false,
  isError: false,
  error: "",
};

export const videosAsync = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await getVideos();
  return videos;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(videosAsync.pending, (state) => {
        state.isError = false;
        state.loading = true;
      })
      .addCase(videosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(videosAsync.rejected, (state, action) => {
        state.loading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
