/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import userStepsContext from './userStepsContext';

const UserStepState = ({ children }) => {
  const [progress, setprogress] = useState('');
  const [isnextAllowed, setisnextAllowed] = useState(false);
  const [trigger, settrigger] = useState('');

  const handlenext = (step) => {
    settrigger(step);
  };
  const State = {
    progress,
    setprogress,
    setisnextAllowed,
    isnextAllowed,
    trigger,
    settrigger,
    handlenext
  };
  return <userStepsContext.Provider value={State}>{children}</userStepsContext.Provider>;
};
export default UserStepState;
