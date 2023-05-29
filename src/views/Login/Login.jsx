/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Field, Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/sagaActions';
import { CustomInput } from '../../utils/customComponents';
import './login.css';

const Login = () => {
  const initialValue = {
    email: '',
    password: ''
  };
  const { loginuser, isLoading, errorMsg } = useSelector((state) => state?.auth?.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    dispatch(loginAction({ ...values, navigate }));
  };
  return (
    <div className="container">
      <div className="login_box">
        <span>Log in to Upwork</span>
        <div className="login_body">
          <Formik
            initialValues={initialValue}
            onSubmit={(value) => {
              handleSubmit(value);
            }}>
            {({}) => (
              <Form className="wrapper m-3 flex-column">
                <div className="w-100">
                  <Field
                    type="email"
                    component={CustomInput}
                    inputClassName="my-2 "
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-100">
                  <Field
                    type="password"
                    component={CustomInput}
                    inputClassName="my-2 "
                    name="password"
                    placeholder="Password"
                  />
                </div>

                <Button type="submit">Login</Button>
              </Form>
            )}
          </Formik>
          <Link to="/sign-up"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
