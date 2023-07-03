import React, { useState, useEffect } from 'react';
import StepInfoComponent from './StepInfoComponent';
import { Label } from 'reactstrap';
import { DatePicker } from 'reactstrap-date-picker';
import { Formik, Form, Field } from 'formik';
import { CustomInput, CustomTextArea } from '../../../utils/customComponents';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setJobData,
  setisnextAllowed,
  setprogress,
  settrigger
} from '../../../store/reducer/job/jobSlice';
import { createJobPostAction } from '../../../store/sagaActions/job/job';

const FinalStep = () => {
  const initialValue = {
    jobDescription: '',
    bidPrice: '',
    bidExpiretime: ''
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trigger, jobData } = useSelector((state) => state.job);
  const [jobDescription, setjobDescription] = useState(jobData?.jobDescription || '');
  const [bidPrice, setbidPrice] = useState(jobData?.bidPrice || '');
  const [bidExpiretime, setbidExpiretime] = useState(jobData?.bidExpiretime || '');
  useEffect(() => {
    if (trigger === 'finalstep') {
      dispatch(setisnextAllowed(false));
      dispatch(
        setJobData({
          jobDescription: jobDescription,
          bidPrice: bidPrice,
          bidExpiretime: bidExpiretime
        })
      );
      dispatch(setprogress(100));
      dispatch(settrigger(100));
      navigate(`/client/createjob/finalstep`);
      dispatch(settrigger(''));
      dispatch(
        createJobPostAction({
          ...jobData,
          jobDescription: jobDescription,
          bidPrice: bidPrice,
          bidExpiretime: bidExpiretime
        })
      );
    }
  }, [trigger]);
  useEffect(() => {
    if (jobDescription.length && bidPrice.length && bidExpiretime) {
      dispatch(setisnextAllowed(true));
    }
  }, [jobDescription, bidPrice, bidExpiretime]);

  return (
    <>
      <StepInfoComponent
        label="Last Step"
        title="Last step start the conversation"
        SubInfo={SubInfo}
      />
      <div className=" px-3 py-1 col-lg-6">
        <div className="wrapper justify-start w-100">
          <Formik
            initialValues={initialValue}
            onSubmit={(value) => {
              console.log(value);
            }}>
            {({ values, setFieldValue }) => (
              <Form className="w-100">
                {setbidPrice(values.bidPrice)}
                {setjobDescription(values.jobDescription)}
                {setbidExpiretime(values.bidExpiretime)}
                <div className="p-3 mx-2">
                  <Field
                    label="Describe your job"
                    name="jobDescription"
                    component={CustomTextArea}
                    inputClassName="mt-2"
                    placeholder="describe your job"
                  />
                </div>
                <div className="p-3 mx-2">
                  <Field
                    label="minimum Bid"
                    name="bidPrice"
                    component={CustomInput}
                    inputClassName="mt-2"
                    placeholder="Enter Minimum Bid"
                  />
                </div>
                <div className="p-3 mx-2 wrapper flex-column align-start">
                  <Label>Bid Expire time </Label>
                  <input
                    type="datetime-local"
                    name="bidExpiretime"
                    value={values.bidExpiretime}
                    onChange={(v) => setFieldValue('bidExpiretime', v.target.value)}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default FinalStep;

const SubInfo = () => {
  return (
    <div className="wrapper flex-column align-start">
      <Label>Example Launch</Label>
      <ul className="exlist">
        <li>Build responsive Wordpress site with booking/payment functionality .</li>
        <li> Graphic design needed for design ad creative for multiple campaigns.</li>
        <li>Facebook ad specialist needed for product launch</li>
      </ul>
    </div>
  );
};
