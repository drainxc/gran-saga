import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: "movePage",
  initialState,
  reducers: {
    increment: (state, props) => {
      state.page = props.payload;
    },
  },
});

export const { increment } = pageSlice.actions;

export default pageSlice.reducer;
