/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import makeAnimated from 'react-select/animated';
import useUserStepsContext from '../../../../Context/CreateUsersteps/useUserStepsContext';
import { createuserstep5Action } from '../../../../store/sagaActions';

// vivek yaha pe asli skill add kardena bro
const skills = [
  { value: 'hindi', label: 'Hindi' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'French', label: 'French' }
];
const suggestedskills = [
  { label: 'Testing', value: 'testing' },
  { label: 'Software QA', value: 'qa' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'React', value: 'react' },
  { label: 'Web Design', value: 'desigining' }
];
const CreateUserStep5 = () => {
  const animatedComponents = makeAnimated();
  const [value, setValue] = useState([]);
  const [skillslist, setskillslist] = useState(skills);
  const { trigger, setisnextAllowed, settrigger } = useUserStepsContext();
  const [SkillsData, setSkillsData] = useState([]);
  const handlesuccess = () => {};
  const dispatch = useDispatch();
  useEffect(() => {
    if (trigger === 'step5') {
      dispatch(createuserstep5Action({ handlesuccess, Skills: SkillsData }));
      setisnextAllowed(false);
      settrigger('');
    }
  }, [trigger]);
  useEffect(() => {
    if (value?.length) {
      setSkillsData(value.map((elem) => elem.value));
      setisnextAllowed(true);
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
    <div className="wrapper mt-5 justify-content-start flex-column createprofile_wrapper my-4 w-100">
      <div className="w-100 my-4">
        <h2>Nearly There! What work are you here to do?</h2>
        <p style={{ width: '70%' }}>
          Your skills show clients what you can offer, and help us choose which jobs to recommend to
          you. Add or remove the ones we've suggested, or start typing to pick more. its up to you.{' '}
        </p>
      </div>
      <div className="wrapper mt-4 flex-column w-100 justify-content-start align-items-start">
        <div className="skills_wrapper mt-3">
          <h4 className="my-2">Your Skills</h4>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            classNamePrefix="react-select-multi"
            isClearable={false}
            options={skillslist}
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="skills_wrapper mt-3">
          <h4 className="my-3">Suggested Skills</h4>
          <div className="wrapper justify-content-start">
            {suggestedskills.map((elem) => (
              <div
                key={elem.label}
                onClick={() => handleSuggestedCLick(elem)}
                className="rounded-pill cp mx-2 px-2 skillspills wrapper justify-content-between">
                <i className="fa-solid fa-plus mx-1"></i>
                <p className="mx-1">{elem.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserStep5;
