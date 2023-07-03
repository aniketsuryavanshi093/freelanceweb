import React, { useState, useEffect } from 'react';

import StepInfoComponent from './StepInfoComponent';
import { Form, Formik } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setJobData,
  setisnextAllowed,
  setprogress,
  settrigger
} from '../../../store/reducer/job/jobSlice';

const JobBudget = () => {
  const [SelectedTab, setSelectedTab] = useState('hourly');
  const { trigger, jobData } = useSelector((state) => state.job);
  const hourlyinitial = {
    rate: jobData?.jobHourly || ''
  };
  const projectbudgetinitial = {
    budget: jobData?.jobBudget || ''
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobHourly, setjobHourly] = useState(jobData?.jobHourly || '');
  const [jobBudget, setjobBudget] = useState(jobData?.jobBudget || '');
  useEffect(() => {
    if (trigger === 'budget') {
      dispatch(setisnextAllowed(false));
      dispatch(
        setJobData({
          jobHourly: jobHourly,
          jobBudget: jobBudget
        })
      );
      navigate(`/client/createjob/finalstep`);
      if (!jobData?.jobHourly || !jobData?.jobBudget) {
        dispatch(setprogress(80));
      }
      dispatch(settrigger(''));
    }
  }, [trigger]);
  useEffect(() => {
    if (jobHourly.length || jobBudget.length) {
      dispatch(setisnextAllowed(true));
    }
  }, [jobHourly]);
  return (
    <>
      <StepInfoComponent
        label="Budget"
        title="Tell us about your budget"
        subtitle="this will help us to match you the talent within your range."
      />
      <div className=" px-3 py-1 col-lg-6">
        <div className="justify-start mb-4 wrapper" style={{ width: '80%' }}>
          <div
            onClick={() => setSelectedTab('hourly')}
            className={`${SelectedTab == 'hourly' && 'selected'} cp selectTab rounded px-2 py-2`}
            style={{ flex: 1 }}>
            <div className="px-1 mb-3 wrapper justify-between">
              <i className="fa-regular fa-clock"></i>
              <div className={`roundedcheck ${SelectedTab === 'hourly' && 'filled'}`}></div>
            </div>
            <h5>Hourly Rate</h5>
          </div>
          <div
            onClick={() => setSelectedTab('budget')}
            className={`${
              SelectedTab == 'budget' && 'selected'
            } cp mx-4 selectTab rounded px-2 py-2`}
            style={{ flex: 1 }}>
            <div className="px-1 mb-3 wrapper justify-between">
              <i className="fa-solid fa-hand-holding-dollar"></i>
              <div className={`roundedcheck ${SelectedTab === 'budget' && 'filled'}`}></div>
            </div>
            <h5>Project Budget</h5>
          </div>
        </div>
        <div className="wrapper flex-column align-start">
          <Formik
            initialValues={SelectedTab === 'hourly' ? hourlyinitial : projectbudgetinitial}
            onSubmit={(value) => {
              console.log(value);
            }}>
            {({ values, handleChange }) => (
              <Form>
                {SelectedTab == 'hourly' ? (
                  <div className="wrapper justify-start">
                    <FormGroup className="position-relative">
                      {setjobHourly(values?.rate)}
                      <Label for="exampleEmail">Hourly $</Label>
                      <i className="fa-solid position-absolute dolooersign fa-dollar-sign"></i>
                      <Input
                        id="exampleEmail"
                        name="rate"
                        className="no-spinners text-end"
                        onChange={handleChange}
                        value={values?.rate}
                        placeholder="Enter hourly rates"
                        type="number"
                      />
                    </FormGroup>
                  </div>
                ) : (
                  <div className="wrapper justify-start">
                    <FormGroup className="position-relative">
                      {setjobBudget(values?.budget)}
                      <Label for="exampleEmail">Maximum Project Budget $</Label>
                      <i className="fa-solid position-absolute dolooersign fa-dollar-sign"></i>
                      <Input
                        id="exampleEmail"
                        className="no-spinners text-end"
                        name="budget"
                        onChange={handleChange}
                        value={values?.budget}
                        placeholder="Enter project's budget"
                        type="number"
                      />
                    </FormGroup>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default JobBudget;
