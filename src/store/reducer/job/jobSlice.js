import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  progress: '0',
  isnextAllowed: false,
  trigger: '',
  jobData: {},
  jobSforYou: null,
  alljobs: null,
  bestMatch: null
};
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setisnextAllowed: (state) => {
      state.isnextAllowed = true;
    },
    setJobData: (state, { payload }) => {
      state.jobData = {
        ...state.jobData,
        ...payload
      };
    },
    setprogress: (state, { payload }) => {
      state.progress = payload;
    },
    settrigger: (state, { payload }) => {
      state.trigger = payload;
    },
    getJobRecommenSuccess: (state, { payload: { type, data } }) => {
      switch (type) {
        case 'myskills':
          state.bestMatch = data;
          break;
        case 'all':
          state.alljobs = data;
          break;
        case 'foryou':
          state.jobSforYou = data;
          break;
        default:
          break;
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { setisnextAllowed, settrigger, setprogress, setJobData, getJobRecommenSuccess } =
  jobSlice.actions;

export const jobReducer = jobSlice.reducer;
