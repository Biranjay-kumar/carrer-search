import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null, // Initially no job is selected
    allAdminJobs: [],
    searchJobByText: "",
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload; // Payload contains an array of jobs
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload; // Payload contains the single job data
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJob, setAllAdminJobs, setSearchJobByText } =
  jobSlice.actions;
export default jobSlice.reducer;
