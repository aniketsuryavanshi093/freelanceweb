import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './createpost.css';
import { Progress } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { settrigger } from '../../../store/reducer/job/jobSlice';

const CreateJobCOntainer = () => {
  const { progress, isnextAllowed } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const location = useLocation();
  return (
    <div className="container my-5">
      <div className="row">
        <Outlet />
      </div>
      <div className="wrapper mb-3 justify-end w-100">
        <button className="rounded-pill mx-2 px-2 mt-3 proceedbtn" onClick={() => naviagte(-1)}>
          Back
        </button>
      </div>
      <div className="wrapper mb-3 justify-end w-100">
        <button
          disabled={!isnextAllowed}
          className="rounded-pill mx-2 px-2 mt-3 proceedbtn"
          onClick={() => dispatch(settrigger(location.pathname.split('/')[3]))}>
          Next Skills
        </button>
      </div>
      <Progress value={progress} />
    </div>
  );
};

export default CreateJobCOntainer;
