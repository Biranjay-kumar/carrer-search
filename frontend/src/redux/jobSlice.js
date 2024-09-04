import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null, // Initially no job is selected
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload; // Payload contains an array of jobs
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload; // Payload contains the single job data
    },
  },
});

export const { setAllJobs, setSingleJob } = jobSlice.actions;
export default jobSlice.reducer;
