import React, { useState, useEffect } from 'react';
import { Label } from 'reactstrap';
import StepInfoComponent from './StepInfoComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
  setJobData,
  setisnextAllowed,
  setprogress,
  settrigger
} from '../../../store/reducer/job/jobSlice';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trigger, jobData } = useSelector((state) => state.job);
  const [JobTitle, setJobTitle] = useState(jobData?.jobTitle || '');
  useEffect(() => {
    if (trigger === 'headline') {
      dispatch(setisnextAllowed(false));
      dispatch(
        setJobData({
          jobTitle: JobTitle
        })
      );
      if (!jobData?.jobTitle?.length) {
        dispatch(setprogress(15));
      }
      navigate(`/client/createjob/skills`);
      dispatch(settrigger(''));
    }
  }, [trigger]);
  useEffect(() => {
    if (JobTitle.length > 1) {
      dispatch(setisnextAllowed(true));
    }
  }, [JobTitle]);

  return (
    <>
      <StepInfoComponent
        label="Headline"
        title="Lets start with a strong headline."
        subtitle="this helps your jo post stand out to the right candidate. its the first thing htey will see. so make it count ."
      />
      <div className=" px-3 py-1 col-lg-6">
        <div className="flex-column align-start mb-4 wrapper">
          <Label htmlFor="headline">Country</Label>
          <input
            onChange={(e) => setJobTitle(e.target.value)}
            id="headline"
            value={JobTitle}
            placeholder="write a short headline"
            type="text"
            className="form-control w-100"
          />
        </div>
        <div className="wrapper flex-column align-start">
          <Label>Example Launch</Label>
          <ul className="exlist">
            <li>Build responsive Wordpress site with booking/payment functionality .</li>
            <li> Graphic design needed for design ad creative for multiple campaigns.</li>
            <li>Facebook ad specialist needed for product launch</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
