import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
  },
  reducers: {
    setAllJobs: (state, actions) => {
      state.allJobs = actions.payload;
    },
  },
});
export const { setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;
