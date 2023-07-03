/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getJobRecommendAction } from '../../../store/sagaActions';
import './home.css';
import { useQuery } from '@tanstack/react-query';
import { getrecommendjobs } from '../../../apiservices/jobs';
import JobCard from './HomeComponents/JobCard';
import { Placeholder } from 'react-bootstrap';
import { SwipeableDrawer } from '@material-ui/core';
import JobSidebar from './HomeComponents/JobSidebar';

const Home = () => {
  const [showDrawer, setsetShowDrawer] = useState({ open: false, jobid: '' });
  const currentuser = useSelector((state) => state?.auth?.login?.loginuser);
  const [selectedTab, selectedTabSet] = useState('all');
  const [queryData, setqueryData] = useState([]);
  const { data: QueryData, isLoading } = useQuery({
    queryKey: [selectedTab],
    queryFn: () =>
      getrecommendjobs({
        type: selectedTab,
        pageNumber: 1,
        pageSize: 10,
        myskill: currentuser?.Skills
      })
  });
  useEffect(() => {
    if (QueryData) {
      if (selectedTab === 'saved') {
        setqueryData(
          QueryData?.data?.data?.map((elem) => ({
            ...elem.jobId,
            wishlistid: elem._id
          }))
        );
      } else {
        setqueryData(QueryData?.data?.data?.result?.data || []);
      }
    }
  }, [QueryData, selectedTab]);
  return (
    <div className="homecontainer wrapper">
      <div className="w-100 workcontainer">
        <div className="w-100 findtab pt-3 pe-3 ps-3 pb-0">
          <h4>Jobs you might like</h4>
          <ul className="wrapper  cp justify-start p-0 mb-0">
            <li
              onClick={() => selectedTabSet('all')}
              className={`headertabli ${selectedTab === 'all' && 'activelist'} mx-1`}>
              All Postings
            </li>
            <li
              onClick={() => selectedTabSet('myskills')}
              className={`headertabli ${selectedTab === 'myskills' && 'activelist'} mx-1`}>
              Best Matches
            </li>
            <li
              onClick={() => selectedTabSet('foryou')}
              className={`headertabli ${selectedTab === 'foryou' && 'activelist'} mx-1`}>
              For You
            </li>
            <li
              onClick={() => selectedTabSet('saved')}
              className={`headertabli ${selectedTab === 'saved' && 'activelist'} mx-1`}>
              Saved Jobs
            </li>
          </ul>
        </div>
        <div className="w-100 mb-3">
          <p className="pb-0 p-4">
            Browse jobs that match your experience to a client's hiring preferences. Ordered by most
            relevant.
          </p>
          {isLoading ? (
            Array(3)
              .fill('0')
              .map(() => (
                <Placeholder animation="glow">
                  <div className="w-100 jobscard postiton-relative cp p-4">
                    <div className="wrapper justify-between">
                      <Placeholder as="p" style={{ width: '60%', borderRadius: '7px' }} />
                      <Placeholder className="wrapper placeholder wishlisticon" />
                    </div>
                    <Placeholder as="p" style={{ width: '80%', borderRadius: '7px' }} />
                    <Placeholder as="p" style={{ width: '89%', borderRadius: '7px' }} />
                    <div className="wrapper my-2 justify-start flex-wrap">
                      {Array(3)
                        .fill('0')
                        .map((skill) => (
                          <Placeholder
                            as="p"
                            style={{ width: '10%', borderRadius: '7px' }}
                            className="placeholder skilltab cp me-2"
                          />
                        ))}
                    </div>
                    <Placeholder as="p" style={{ width: '20%', borderRadius: '7px' }} />
                  </div>
                </Placeholder>
              ))
          ) : (
            <JobCard
              showDrawer={setsetShowDrawer}
              queryData={queryData}
              selectedTab={selectedTab}
            />
          )}
          <SwipeableDrawer
            style={{ borderRadius: '20px' }}
            anchor="right"
            open={showDrawer.open}
            onClose={({ open, jobid }) => setsetShowDrawer({ open, jobid })}>
            <JobSidebar
              onClose={() => setsetShowDrawer({ open: false, jobid: '' })}
              jobId={showDrawer?.jobid}
            />
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
};
export default Home;
//
