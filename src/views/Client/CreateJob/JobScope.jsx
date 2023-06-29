/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import StepInfoComponent from './StepInfoComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
  setJobData,
  setisnextAllowed,
  setprogress,
  settrigger
} from '../../../store/reducer/job/jobSlice';
import { useNavigate } from 'react-router-dom';
import { Label } from 'reactstrap';
import { Field, Form, Formik } from 'formik';
import { CustomRadioButton } from '../../../utils/customComponents';

const JobScope = () => {
  const radiomap = [
    { name: '3-6', label: '3 to 6 months' },
    { name: '1-3', label: '1 to 3 months' },
    { name: '1', label: 'less than 1 month' }
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trigger, jobData } = useSelector((state) => state.job);
  const initialValue = {
    timetake: jobData?.scopeofwork || ''
  };
  const [Scope, setScope] = useState(jobData?.scopeofwork || '');
  useEffect(() => {
    if (trigger === 'scope') {
      dispatch(setisnextAllowed(false));
      dispatch(
        setJobData({
          scopeofwork: Scope
        })
      );
      navigate(`/client/createjob/budget`);
      if (!jobData?.scopeofwork?.length) {
        dispatch(setprogress(60));
      }
      dispatch(settrigger(''));
    }
  }, [trigger]);
  useEffect(() => {
    if (Scope.length > 1) {
      dispatch(setisnextAllowed(true));
    }
  }, [Scope]);
  return (
    <>
      <StepInfoComponent
        label="Scope"
        title="Next Estimate the scope of your work."
        subtitle="Consider the scope of your project and the time that it takes."
      />
      <div className=" px-3 py-1 col-lg-6">
        <Formik
          initialValues={initialValue}
          onSubmit={(value) => {
            console.log(value);
          }}>
          {({ values, handleChange }) => (
            <Form>
              <div className="wrapper flex-column align-start">
                <Label>How long with your work take?</Label>
                <div className="px-2 wrapper align-start flex-column my-2" style={{ flex: 3 }}>
                  {setScope(values.timetake)}
                  {radiomap.map((elem) => (
                    <Field
                      key={elem.name}
                      type="radio"
                      inputClassName="mx-1"
                      component={CustomRadioButton}
                      className=" mx-2 my-2 "
                      name="timetake"
                      handleChange={handleChange}
                      value={elem.name}
                      label={elem.label}
                    />
                  ))}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default JobScope;
