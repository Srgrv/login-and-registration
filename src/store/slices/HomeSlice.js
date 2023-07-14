import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "home/getTodosAsync",
  async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=10`
    );
    return response.data;
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    lists: [],
  },
  reducers: {
    // getTodos(state, action) {
    //   state.lists = action.payload;
    // },
  },
  extraReducers: (build) => {
    build.addCase(getTodosAsync.fulfilled, (state, action) => {
      console.log("full");
      state.lists = action.payload;
    });
  },
});

export const { getTodos } = HomeSlice.actions;
export default HomeSlice.reducer;
