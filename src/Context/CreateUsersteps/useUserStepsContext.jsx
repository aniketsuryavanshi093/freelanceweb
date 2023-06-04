/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import userStepsContext from './userStepsContext';

function useUserStepsContext() {
  return useContext(userStepsContext);
}

export default useUserStepsContext;
