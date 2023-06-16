import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import React from 'react';
import { CustomInput, CustomRadioButton } from '../../../utils/customComponents';
import { createClientStepAction } from '../../../store/sagaActions';

const ClientUserSetup = () => {
  const createInitialValue = {
    nopeople: '',
    websiteLink: '',
    CompanyName: ''
  };
  const dispatch = useDispatch();
  const handleSubmit = (val) => {
    dispatch(createClientStepAction(val));
    console.log(val);
  };
  const labeldta = [
    {
      value: '1',
      label: 'its just me '
    },
    {
      value: '10',
      label: '2-9 employees '
    },
    {
      value: '100',
      label: '10-99 employees'
    },
    {
      value: '1000',
      label: '100-1000 employees '
    },
    {
      value: '1000+',
      label: 'more than 1000 employees '
    }
  ];
  const expvalidation = Yup.object({
    CompanyName: Yup.string().required('This field is required'),
    websiteLink: Yup.string().required('This field is required'),
    nopeople: Yup.string().required('This field is required')
  });
  return (
    <div className="container">
      <div
        className="wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4"
        style={{ width: '70%' }}>
        <div className="w-100 my-4">
          <h2>Welcome to FreeLance Web.</h2>
          <p>tell us about your businedd and you will be on your way to connect talent</p>
        </div>
        <Formik
          initialValues={createInitialValue}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validationSchema={expvalidation}
          render={({ values, errors, handleChange, touched, setFieldValue }) => (
            <Form className="w-100">
              <div className="my-2 wrapper w-100 flex-column justify-content-start">
                <p className="text-left w-100">How many people in your company.</p>
                <div className="wrapper flex-column w-100 align-items-start">
                  {labeldta.map((elem) => (
                    <Field
                      key={elem.label}
                      component={CustomRadioButton}
                      type="radio"
                      handleChange={handleChange}
                      value={elem.value}
                      name="nopeople"
                      label={elem.label}
                    />
                  ))}
                  {errors && <div className="invalid-feedback d-block mb-1">{errors.nopeople}</div>}
                </div>
                <div className="w-100 wrapper flex-column align-start">
                  <div className="mb-2 w-50 ">
                    <Field
                      type="text"
                      inputClassName=""
                      component={CustomInput}
                      name="CompanyName"
                      label="Company"
                    />
                  </div>
                  <div className="mb-2 w-50 ">
                    <Field
                      type="text"
                      inputClassName=""
                      component={CustomInput}
                      name="websiteLink"
                      label="Website"
                    />
                  </div>
                </div>
                <div className="wrapper w-100 justify-content-end">
                  <button type="submit" className="rounded-pill  py-2 getstarted_btn">
                    Continue
                  </button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
};

export default ClientUserSetup;
