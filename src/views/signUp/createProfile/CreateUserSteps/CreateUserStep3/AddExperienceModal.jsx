import React from 'react';
import CustomModal from '../../../../../components/Modals/Custommodal';
import * as Yup from 'yup';
import { Form, Formik, Field } from 'formik';
import { DatePicker } from 'reactstrap-date-picker';
import { CustomCheckbox, CustomInput, CustomTextArea } from '../../../../../utils/customComponents';
import { Button, Label } from 'reactstrap';
import { v1 as uuidv1 } from 'uuid';

const AddExperienceModal = ({
  open,
  close,
  onSubmitVal,
  isUpdate,
  data,
  setExperienceData,
  ExperienceData
}) => {
  const createInitialValue = {
    title: isUpdate ? data.title : '',
    Company: isUpdate ? data.Company : '',
    Location: isUpdate ? data.Location : '',
    currentlyWorking: isUpdate ? data.currentlyWorking : false,
    StartDate: isUpdate ? data.StartDate : '',
    EndDate: isUpdate ? data.EndDate : '',
    Desc: isUpdate ? data.Desc : ''
  };
  const expvalidation = Yup.object({
    Company: Yup.string().required('This field is required'),
    title: Yup.string().required('This field is required'),
    Location: Yup.string().required('This field is required'),
    currentlyWorking: Yup.boolean(),
    StartDate: Yup.date().required('This field is required'),
    EndDate: Yup.date().when('currentlyWorking', {
      is: false,
      then: Yup.date()
        .max(new Date(), 'End Date Should be less than todays date')
        .required('This field is required')
    })
  });
  const handleSubmit = (val) => {
    if (isUpdate) {
      setExperienceData(
        ExperienceData?.map((elem) => (elem.uid === data?.uid ? { ...val, uid: data?.uid } : elem))
      );
    } else {
      onSubmitVal({ ...val, uid: uuidv1() });
    }
    close();
  };
  return (
    <CustomModal size={'lg'} isOpen={open} title="Add Work Experience" onClose={close}>
      <div className="m-2">
        <Formik
          initialValues={createInitialValue}
          validationSchema={expvalidation}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          render={({ setFieldValue, values, errors, touched }) => (
            <Form className="w-100 user_form ">
              <div className="mb-2">
                <Field
                  type="text"
                  inputClassName=""
                  component={CustomInput}
                  name="title"
                  label="Title"
                />
              </div>
              <div className="mb-2">
                <Field
                  type="text"
                  inputClassName=""
                  component={CustomInput}
                  name="Company"
                  label="Company"
                />
              </div>
              <div className="mb-2">
                <Field
                  type="text"
                  inputClassName=""
                  component={CustomInput}
                  name="Location"
                  label="Location"
                />
              </div>
              <Field
                type="checkbox"
                id="currentlyWorking"
                component={CustomCheckbox}
                val={values.currentlyWorking}
                className=" mx-2 my-2 "
                inputClassName="mx-2"
                name="currentlyWorking"
                label="Are you currently working in this job"
              />
              <div className="my-3 wrapper align-items-start justify-start">
                <div>
                  <Label>Start Date </Label>
                  <DatePicker
                    id="example-datepicker"
                    name="StartDate"
                    value={values.StartDate}
                    onChange={(v) => setFieldValue('StartDate', v)}
                  />
                  {errors?.StartDate && touched?.StartDate && (
                    <div className="invalid-feedback d-block mb-1">{errors.StartDate}</div>
                  )}
                </div>
                <div className="mx-3">
                  {!values.currentlyWorking && (
                    <>
                      <Label>End Date </Label>
                      <DatePicker
                        id="example-datepicker"
                        name="EndDate"
                        value={values.EndDate}
                        onChange={(v) => setFieldValue('EndDate', v)}
                      />
                      {errors?.EndDate && touched?.EndDate && (
                        <div className="invalid-feedback d-block mb-1">{errors.EndDate}</div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="mb-2 ">
                <Field type="text" component={CustomTextArea} name="Desc" label="Description" />
              </div>
              <div className="my-2  wrapper justify-start">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        />
      </div>
    </CustomModal>
  );
};

export default React.memo(AddExperienceModal);
