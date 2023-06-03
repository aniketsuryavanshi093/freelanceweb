import React from 'react';

const CreateUserSteps3 = () => {
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
          <div className="exp-card  p-2 m-2 ">
            <div className="wrapper align-start justify-between">
              <div className="wrapper m-2">
                <i
                  className="fa-solid fa-folder-open fa-flip-horizontal"
                  style={{ color: '#0aae25' }}></i>
              </div>
              <div className="w-100 mx-2">
                <h5>Frontend Developer</h5>
                <p>Microsoft</p>
                <p>March 2002 , Present</p>
                <p>Switzerland</p>
                <p>hello</p>
              </div>
              <div className="wrapper">
                <div className=" mx-2 ">
                  <i className="fa-solid fa-pen"></i>
                </div>
                <div className=" ">
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserSteps3;
