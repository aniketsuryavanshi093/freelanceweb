/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { monthObj } from '../../../../../constants';
import { useDispatch } from 'react-redux';
import useUserStepsContext from '../../../../../Context/CreateUsersteps/useUserStepsContext';
import AddExperienceModal from './AddExperienceModal';
import './createstep3.css';
import { createuserstep3Action } from '../../../../../store/sagaActions';

const CreateUserSteps3 = () => {
  const [AddModal, setAddModal] = useState({ open: false, isUpdate: false, data: {} });
  const { progress, setprogress, trigger, setisnextAllowed, settrigger } = useUserStepsContext();
  const [ExperienceData, setExperienceData] = useState([]);
  const dispatch = useDispatch();
  const handlesuccess = () => {};
  useEffect(() => {
    if (trigger === 'step3') {
      dispatch(createuserstep3Action({ handlesuccess, ExperienceData }));
      setisnextAllowed(false);
      settrigger('');
    }
  }, [trigger]);
  useEffect(() => {
    if (ExperienceData.length) {
      setisnextAllowed(true);
    }
  }, [ExperienceData]);
  const handleAddExp = (val) => {
    setExperienceData((prev) => [...prev, val]);
  };
  const formatDate = (start, end) => {
    return `${monthObj[new Date(start).getMonth() + 1]} ${new Date(start).getFullYear()}, ${
      end ? `${monthObj[new Date(end).getMonth() + 1]} ${new Date(end).getFullYear()}` : 'present'
    }`;
  };

  return (
    <div
      className="wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4"
      style={{ width: '100%' }}>
      <div className="w-100 my-4">
        <h2>if you have relevant work experience , add it here.</h2>
        <p>
          freelancers who add their experience are twice as likely to win work. But if you've just
          starting out, you can still create a great profile , Just head on to the next page.
        </p>
      </div>
      <div className="my-2 wrapper w-100 flex-column justify-content-start">
        <div className="w-100 exp_wrapper">
          {ExperienceData?.map((exp) => (
            <div key={exp.uid} className="exp-card  p-2 m-2 ">
              <div className="wrapper align-start justify-between">
                <div className="wrapper m-2">
                  <i
                    className="fa-solid fa-folder-open fa-flip-horizontal"
                    style={{ color: '#0aae25' }}></i>
                </div>
                <div className="w-100 mx-2">
                  <h5 className="exp_title">{exp.title}</h5>
                  <p className="exp_bio">{exp.Company}</p>
                  <p className="exp_bio">
                    {formatDate(exp.StartDate, exp.EndDate)} March 2002 , Present
                  </p>
                  <p className="exp_bio">{exp.Location}</p>
                  {exp?.Desc && <p className="exp_bio">{exp?.Desc}</p>}
                </div>
                <div
                  onClick={() =>
                    setAddModal({
                      open: true,
                      isUpdate: true,
                      data: ExperienceData.find((elem) => elem.uid === exp.uid)
                    })
                  }
                  className="wrapper">
                  <div className=" mx-2 ">
                    <i className="fa-solid fa-pen"></i>
                  </div>
                  <div
                    onClick={() =>
                      setExperienceData(ExperienceData.filter((elem) => elem.uid != exp.uid))
                    }
                    className=" ">
                    <i className="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="exp-card cp add_exp_bg p-2 m-2 ">
            <div
              onClick={() => setAddModal({ open: true, isUpdate: false })}
              className="wrapper  align-start add_exp justify-center flex-column">
              <div className="wrapper rounded-pill m-2 p-2" style={{ background: '#0aae25' }}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <div>
                <h4 className="mx-2"> Add Your Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {AddModal.open && (
        <AddExperienceModal
          onSubmitVal={handleAddExp}
          open={AddModal.open}
          isUpdate={AddModal.isUpdate}
          setExperienceData={setExperienceData}
          ExperienceData={ExperienceData}
          data={AddModal.data}
          close={() => setAddModal({ open: false, isUpdate: false })}
        />
      )}
    </div>
  );
};

export default CreateUserSteps3;
