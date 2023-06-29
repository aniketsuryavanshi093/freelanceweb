import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: "0",
  isnextAllowed: false,
  trigger: "",
  jobData: {}
};
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setisnextAllowed: (state) => {
      state.isnextAllowed = true;
    },
    setJobData: (state , {payload})=>{
      state.jobData = {
        ...state.jobData , ...payload
      }
    },
    setprogress: (state, {payload})=>{
      state.progress = payload;
    },
    settrigger: (state, { payload }) => {
      state.trigger = payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const {
  setisnextAllowed,settrigger,setprogress,setJobData,
} = jobSlice.actions;

export const jobReducer = jobSlice.reducer;
