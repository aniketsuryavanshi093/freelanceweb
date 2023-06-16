import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useUserStepsContext from '../../../../Context/CreateUsersteps/useUserStepsContext';
import { createuserstep2Action } from '../../../../store/sagaActions';

const CreateUserSteps2 = () => {
  const [Role, setRole] = useState('');
  const dispatch = useDispatch();
  const { trigger, setisnextAllowed, settrigger } = useUserStepsContext();
  useEffect(() => {
    if (trigger === 'step2') {
      dispatch(createuserstep2Action({ Role }));
      setisnextAllowed(false);
      settrigger('');
    }
  }, [trigger]);
  useEffect(() => {
    if (Role.length) {
      setisnextAllowed(true);
    }
  }, [Role]);
  return (
    <div
      className="wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4"
      style={{ width: '70%' }}>
      <div className="w-100 my-4">
        <h2>Got it. Now, add a title to tell the world what you do.</h2>
        <p>
          its very first thing clients see. so make it count. Stand out by describing your expertise
          in your own words.
        </p>
      </div>
      <div className="my-2 wrapper w-100 flex-column justify-content-start">
        <p className="text-left w-100">Your professional role</p>
        <input
          value={Role}
          onChange={(e) => setRole(e.target.value)}
          className="form-control mt-3"
          type="text"
          placeholder="Software Engineer | javascript | iOS"
        />
      </div>
    </div>
  );
};

export default CreateUserSteps2;
