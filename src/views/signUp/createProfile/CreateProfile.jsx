/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import './createuserprofile.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import UserCard from '../../../components/UserCard/UserCard';
import { useSelector } from 'react-redux';
const CreateProfile = () => {
  const location = useLocation();
  const { data: currentuser } = useSelector((state) => state?.profile?.currentUserProfile);
  console.log(currentuser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentuser?.FirstName) {
      if (Object.values(currentuser?.stepCompleted)?.some((elem) => elem && elem)) {
        for (const iterator of Object.keys(currentuser?.stepCompleted)) {
          if (!currentuser?.stepCompleted[iterator]) {
            navigate(`/create-profile/${iterator}`);
            break;
          }
        }
      }
    }
  }, [currentuser]);

  return (
    <div className="container">
      {location.pathname.includes('step') ? (
        <Outlet />
      ) : (
        <div className="wrapper createprofile_wrapper flex-wrap-reverse my-4">
          <div className="div1">
            <div className="my-3">
              <h1>Hey {currentuser?.FirstName}. Ready for your next big opportunity?</h1>
            </div>
            <div className="smallinfo_wrapper">
              <div className="wrapper justify-content-start my-3">
                <i className="fa-solid fa-user"></i>
                <p className="mx-4"> Answer a few Question and start building your profile </p>
              </div>
              <div className="divider"></div>
              <div className="wrapper justify-content-start my-3">
                <i className="fa-solid fa-envelope"></i>
                <p className="mx-4">Apply for open roles or list services for client to buy </p>
              </div>
              <div className="divider"></div>

              <div className="wrapper justify-content-start my-3">
                <i className="fa-solid fa-sack-dollar"></i>
                <p className="mx-4"> Get paid safely ! </p>
              </div>
              <div className="divider"></div>
            </div>
            <div className="mt-4 wrapper justify-content-start">
              <button
                className="rounded-pill  py-2 getstarted_btn"
                onClick={() => navigate(`/create-profile/step2`)}>
                Get Started
              </button>
              <p className="mx-4 text-small">
                it only takes 5-10 minutes and you can edit it later. We'll save as you go.
              </p>
            </div>
          </div>
          <UserCard />
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
