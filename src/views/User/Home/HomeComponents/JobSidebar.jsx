/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const JobSidebar = ({ jobId, onClose }) => {
  return (
    <div className="sidebarjobwrapper p-3">
      <div className="wrapper justify-start">
        <i onClick={onClose} className="fa-solid cp fa-chevron-left"></i>
      </div>
      <div className="jobinfo mt-5 wrapper w-100">
        <div className="jobrelated ">
          <div className="py-3 px-4">
            <h4>Title</h4>
            <div className="justify-start wrapper flex-column align-items-start">
              <p className="occupationinfo">Web Design</p>
              <p className="text_muted jobmutedtext">posted 1 hour ago</p>
            </div>
            <div className="wrapper mt-3 justify-start">
              <i className="fa-solid me-1 fa-globe"></i>
              <p>Worldwide</p>
            </div>
          </div>
          <div className="divider w-100" />
          <div className="py-2 px-4">
            <p>
              i'm looking for somebody to make a working developed webpage from figma page design to
              wordpress/godaddy host website. (domain exists too).
            </p>
          </div>
          <div className="divider w-100" />
          <div className="py-3 px-4">
            <div className="wrapper flex-column align-items-start justify-start">
              <div className="wrapper">
                <i className="fa-solid me-2 fa-tag"></i>
                <p>$250.00</p>
              </div>
              <p className="text_muted ms-2 jobmutedtext">Fixed-price</p>
            </div>
          </div>
          <div className="divider w-100" />
          <div className="py-3 px-4">
            <p>You will be asked to answer the following questions when submitting a proposal:</p>
            <ul>
              <li>Describe your recent experience with similar projects</li>
            </ul>
          </div>
          <div className="divider w-100" />
          <div className="py-3 px-4">
            <h5>Skills and Expertise</h5>
            <div className="wrapper my-2 justify-start flex-wrap">
              {/* {elem.jobSkills?.map((skill) => (
                <p key={skill} className="skillstab cp me-2">
                  {skill}
                </p>
              ))} */}
            </div>
          </div>
          <div className="divider w-100" />
          <div className="py-3 px-4">
            <h5>Activity on this job</h5>
            <div className="wrapper my-2 justify-start flex-wrap">
              <div className="wrapper flex-column align-items-start justify-start">
                <div className="wrapper justify-start">
                  <p className="text_muted me-2">Propersals:</p>
                  <p>10</p>
                </div>
                <div className="wrapper justify-start">
                  <p className="text_muted me-2">Last viewed by client:</p>
                  <p>5 Hour Ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clientrelated p-2">
          <h1>hello client</h1>
        </div>
      </div>
      <div className="wrapper justify-start w-100 mt-4 clienthistorywrapper">
        <div className="py-3 w-100 px-4">
          <h5>Client's recent history (1)</h5>
          <div className="wrapper justify-between">
            <div className="">
              <p className="occupationinfo">Make a video for landing page</p>
              <p className="text_muted  jobmutedtext" style={{ fontStyle: 'italic' }}>
                {' '}
                Job in progress
              </p>
              <p className="text_muted my-2">
                Freelancer: <span className="occupationinfo">Aniket</span>
              </p>
            </div>
            <div className="wrapper justify-end ">
              <p>Jun 2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSidebar;
