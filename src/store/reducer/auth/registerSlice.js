import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  registerlancerData: null,
  errorMsg: ''
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerlancerStart: (state) => {
      state.isLoading = true;
      state.errorMsg = '';
    },
    registerlancerSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.registerlancerData = payload;
    },
    registerlancerFail: (state, { payload }) => {
      state.isLoading = false;
      state.errorMsg = payload;
    },
    resetRegisterErrorMsg: (state) => {
      state.errorMsg = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  registerlancerStart,
  registerlancerSuccess,
  registerlancerFail,
  resetRegisterErrorMsg
} = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
