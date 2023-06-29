import React, { useState, useEffect } from 'react';
import StepInfoComponent from './StepInfoComponent';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useDispatch, useSelector } from 'react-redux';
import {
  setJobData,
  setisnextAllowed,
  setprogress,
  settrigger
} from '../../../store/reducer/job/jobSlice';
import { useNavigate } from 'react-router-dom';

const JobSkills = () => {
  const skills = [
    { value: 'hindi', label: 'Hindi' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'French', label: 'French' }
  ];
  const suggestedskills = [
    { label: 'Testing', value: 'testing' },
    { label: 'Testing', value: 'testing' },
    { label: 'Software QA', value: 'qa' },
    { label: 'Javascript', value: 'javascript' },
    { label: 'React', value: 'react' },
    { label: 'Web Design', value: 'desigining' }
  ];
  const animatedComponents = makeAnimated();
  const { trigger, jobData } = useSelector((state) => state.job);
  const [value, setValue] = useState([]);
  const [SkillsData, setSkillsData] = useState([]);
  const navigate = useNavigate();
  const [skillslist, setskillslist] = useState(skills);
  const dispatch = useDispatch();
  useEffect(() => {
    if (trigger === 'skills') {
      dispatch(setisnextAllowed(false));
      dispatch(settrigger(''));
      dispatch(setJobData({ jobSkills: SkillsData }));
      if (!jobData?.jobSkills?.length) {
        dispatch(setprogress(40));
      }
      navigate(`/client/createjob/scope`);
    }
  }, [trigger]);
  useEffect(() => {
    if (value?.length) {
      setSkillsData(value.map((elem) => elem.value));
      dispatch(setisnextAllowed(true));
    }
  }, [value]);
  const handleChange = (_, action) => {
    switch (action.action) {
      case 'select-option': {
        setValue([...value, action.option]);
        break;
      }
      default: {
        if (value) {
          setValue([...value.filter((o) => o.value !== action.removedValue.value)]);
        } else {
          setValue(skills);
        }
        break;
      }
    }
  };
  const handleSuggestedCLick = (appendee) => {
    if (!value.find(({ value }) => value === appendee.value)) {
      setValue([...value, appendee]);
    }
  };
  return (
    <>
      <StepInfoComponent label="Skills" title="What are the main skills required for your work?" />
      <div className=" px-3 py-1 col-lg-6">
        <div className="skills_wrapper w-100 mt-3">
          <h5 className="my-2">Search Skills</h5>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            classNamePrefix="react-select-multi"
            isClearable={false}
            className="jobselectcontainer"
            options={skillslist}
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="skills_wrapper w-100 mt-3">
          <h5 className="">Suggested Skills</h5>
          <div className="wrapper justify-content-start flex-wrap ">
            {suggestedskills.map((elem) => (
              <div
                key={elem.label}
                onClick={() => handleSuggestedCLick(elem)}
                className="rounded-pill my-2 no-wrap mx-1 px-2 skillspills wrapper justify-content-between">
                <i className="fa-solid fa-plus mx-1"></i>
                <p className="mx-1">{elem.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSkills;
