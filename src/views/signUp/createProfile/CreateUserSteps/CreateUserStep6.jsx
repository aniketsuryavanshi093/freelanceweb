/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserCard from '../../../../components/UserCard/UserCard';
import useUserStepsContext from '../../../../Context/CreateUsersteps/useUserStepsContext';
import { createuserstep6Action } from '../../../../store/sagaActions';

const CreateUserStep6 = () => {
  const { trigger, setisnextAllowed, settrigger } = useUserStepsContext();
  const [bio, setbio] = useState([]);
  const handlesuccess = () => {};
  const dispatch = useDispatch();
  useEffect(() => {
    if (bio?.length) {
      setisnextAllowed(true);
    }
  }, [bio]);
  useEffect(() => {
    if (trigger === 'step6') {
      dispatch(createuserstep6Action({ handlesuccess, bio }));
      setisnextAllowed(false);
      settrigger('');
    }
  }, [trigger]);
  return (
    <div className="wrapper createprofile_wrapper flex-wrap-reverse my-4">
      <div className="div1">
        <div className="my-3">
          <h2>Great! Now write a bio to tell the world about yourself.</h2>
          <p className="my-2">
            Help people get to know you at a glance. what work are you best at? Tell them clearly,
            using paragraphs or bullets point.
          </p>
        </div>
        <div className="my-2 wrapper w-100 flex-column justify-content-start">
          <p className="text-left w-100">Your Overview</p>
          <textarea
            onChange={(e) => setbio(e.target.value)}
            className="form-control mt-3"
            placeholder="Enter you top skills , experience and interests. this is one of the first thing clients will see on your profile. "
          />
        </div>
      </div>
      <UserCard />
    </div>
  );
};

export default CreateUserStep6;
