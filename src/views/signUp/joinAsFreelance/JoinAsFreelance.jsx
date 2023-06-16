import { Field, Form, Formik } from 'formik';
import Select from 'react-select';
import { countryjson } from '../../../constants/countryjson';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './joinAsFreelance.css';
import {
  registerclientAction,
  registerfreelancerAction
} from '../../../store/sagaActions/auth/auth';
import { Spinner } from 'reactstrap';
import { toast } from 'react-toastify';

const JoinAsFreelance = () => {
  const { role } = useParams();
  const initialValue = {
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    Location: ''
  };
  const { isLoading, errorMsg } = useSelector((state) => state?.auth.register);
  if (errorMsg) {
    toast.error(errorMsg);
  }
  const dispatch = useDispatch();
  const handleSuccess = (response) => {
    console.log(response, '😒😒😒');
  };
  const handleSubmit = (values) => {
    if (role === 'client') {
      dispatch(registerclientAction({ ...values, handleSuccess, userType: 'client' }));
    } else {
      dispatch(registerfreelancerAction({ ...values, handleSuccess, userType: 'freelancer' }));
      console.log(values);
    }
  };
  return (
    <div className="container">
      <div className="form_body">
        <span className="signup_head">
          Sign up to {role == 'freelance' ? 'find work you love' : 'hire talent'}
        </span>
        <div className="form_box">
          <Formik
            initialValues={initialValue}
            onSubmit={(value) => {
              handleSubmit(value);
              console.log(value);
            }}>
            {({ handleChange, values, setFieldValue }) => (
              <Form>
                <div className="name_body">
                  <Field
                    name="FirstName"
                    type="text"
                    className="name_input"
                    placeholder="First name"
                  />
                  <Field
                    name="LastName"
                    type="text"
                    className="name_input"
                    placeholder="Last name"
                  />
                </div>
                <Field name="email" type="email" className="email_input" placeholder="Email" />
                <Field
                  name="password"
                  type="password"
                  className="email_input"
                  placeholder="Password"
                />

                <div className="wrapper" style={{ width: '50%' }}>
                  <Select
                    className="my-3 w-100 "
                    placeholder="Select Country"
                    classNamePrefix="reat-auth"
                    isClearable={true}
                    onChange={(e) => {
                      setFieldValue(`Location`, e.value);
                    }}
                    isSearchable={true}
                    name={`Location`}
                    options={countryjson}
                  />
                </div>
                <label htmlFor="rememberMe">
                  <Field
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    value={values.rememberMe}
                    onChange={handleChange}
                    checked={values.rememberMe}
                    className="remember_checkbox"
                  />
                  Send me helpful emails to find rewarding work and job leads.
                </label>
                <button type="submit" className="rounded-pill addlanguagebtn w-100 px-3 py-2">
                  {isLoading ? <Spinner size="sm" /> : 'Create my account'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default JoinAsFreelance;
