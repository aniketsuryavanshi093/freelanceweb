import moment from 'moment/moment';
import React from 'react';
import Nodata from '../../../../components/Nodata';
import { useDispatch } from 'react-redux';
import { removeWishlistAction, setWishlistAction } from '../../../../store/sagaActions';
import { useQueryClient } from '@tanstack/react-query';

const JobCard = ({ selectedTab, queryData, showDrawer }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const onSuccess = () => {
    console.log('success should call');
    queryClient.invalidateQueries({ queryKey: ['saved'] });
  };
  return queryData?.length ? (
    queryData?.map((elem) => {
      return (
        <div
          key={elem._id}
          onClick={() => showDrawer({ open: true, jobid: elem._id })}
          className="w-100 jobscard postiton-relative cp p-4">
          <div className="wrapper justify-between">
            <p>{elem.jobTitle}</p>
            <div
              onClick={() => {
                if (selectedTab === 'saved') {
                  dispatch(removeWishlistAction({ id: elem._id, onSuccess }));
                } else {
                  dispatch(setWishlistAction(elem._id));
                }
              }}
              className={`wrapper wishlisticon `}>
              {selectedTab === 'saved' ? (
                <i className="fa-solid fa-heart" style={{ color: '#3ee051' }}></i>
              ) : (
                <i className="fa-regular fa-heart" style={{ color: '#3ee051' }}></i>
              )}
            </div>
          </div>
          <p className="text_muted ">
            Hourly-Est. Time.Less than {elem.scope} month, Less than {elem.jobHourly}hrs/week-
            Posted {moment(elem?.createdAt, 'YYYYMMDD').fromNow()}
          </p>
          <p>{elem.jobDescription}</p>
          <div className="wrapper my-2 justify-start flex-wrap">
            {elem.jobSkills?.map((skill) => (
              <p key={skill} className="skillstab cp me-2">
                {skill}
              </p>
            ))}
          </div>
          <p className="text_muted ">
            Proporsals: <span className="proporsalcount">{elem?.Bids?.length}</span>
          </p>
        </div>
      );
    })
  ) : (
    <Nodata customClass="mt-5 pt-5" message="No data found" />
  );
};

export default JobCard;
