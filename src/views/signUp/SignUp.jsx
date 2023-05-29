import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const handleRedirect = () => {
    if (status.length) navigate(`/sign-up/${status}`);
  };

  return (
    <div className="container">
      <div className="signup_body">
        <spam>Join as a client or freelancer</spam>
        <div className="join_box">
          <div
            className={`join_option ${status === 'client' ? 'selected' : ''}`}
            onClick={() => setStatus('client')}>
            I’m a client, hiring for a project
          </div>
          <div
            className={`join_option ${status === 'freelance' ? 'selected' : ''}`}
            onClick={() => setStatus('freelance')}>
            I’m a freelancer, looking for work
          </div>
        </div>
        <div className="apply_btn" onClick={handleRedirect}>
          {status.length ? `Apply as a ${status}` : 'Create Account'}
        </div>
      </div>
    </div>
  );
};

export default SignUp
