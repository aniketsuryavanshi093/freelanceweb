import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  ClientRoutes,
  createjobroutes,
  createprofileclientroutes,
  createprofileroutes,
  guestRoutes,
  userRoutes
} from './routes/mainRoutes/mainRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { LayoutWrapper, ScrollToTop } from './components';
import BackDrop from './components/spinner/BackDrop';
import { ToastContainer } from 'react-toastify';
import CreateProfile from './views/signUp/createProfile/CreateProfile';
import CreateJobCOntainer from './views/Client/CreateJob';
import { getCurrentUserProfileAction } from './store/sagaActions';

function App() {
  let authToken = localStorage.getItem('authToken');
  let createuserauthToken = localStorage.getItem('createUserauthToken');
  const currentuser = useSelector((state) => state?.auth?.login?.loginuser);
  const dispatch = useDispatch();
  const [routes, setRoutes] = useState([]);
  console.log(routes);
  useEffect(() => {
    if (localStorage.getItem('createUserauthToken')) {
      if (localStorage.getItem('userType') === 'client') {
        setRoutes(createprofileclientroutes);
      } else {
        setRoutes(createprofileroutes);
      }
    } else if (localStorage.getItem('authToken')) {
      if (localStorage.getItem('userType') === 'client') {
        setRoutes([...ClientRoutes, ...createjobroutes]);
      } else {
        setRoutes(userRoutes);
      }
    } else {
      setRoutes(guestRoutes);
    }
  }, [currentuser]);
  useEffect(() => {
    if (createuserauthToken || authToken) {
      dispatch(getCurrentUserProfileAction(localStorage.getItem('userType')));
    }
  }, []);
  const mainContent = routes?.map((route) =>
    route.component ? (
      <>
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          name={route.name}
          element={<route.component />}
        />
        {authToken && currentuser?.userType === 'client' && (
          <Route path="/client/createjob" element={<CreateJobCOntainer />}>
            {createjobroutes.map((elem) =>
              elem.component ? (
                <Route
                  index={elem.index}
                  key={elem.name}
                  path={elem.path}
                  exact={elem.exact}
                  name={elem.name}
                  element={<elem.component />}
                />
              ) : (
                route.redirectRoute && (
                  <Route path="*" key={route.name} element={<Navigate to="/createjob" />} />
                )
              )
            )}
          </Route>
        )}
        {createuserauthToken && (
          <Route path="create-profile" element={<CreateProfile />}>
            {createprofileroutes.map((elem) =>
              elem.component ? (
                <Route
                  index={elem.index}
                  key={elem.name}
                  path={elem.path}
                  exact={elem.exact}
                  name={elem.name}
                  element={<elem.component />}
                />
              ) : (
                route.redirectRoute && (
                  <Route path="*" key={route.name} element={<Navigate to="/create-profile" />} />
                )
              )
            )}
          </Route>
        )}
      </>
    ) : (
      route.redirectRoute && (
        <>
          <Route path="/" key={route.name} element={<Navigate to={route.path} />} />
          <Route path="*" key={route.name} element={<Navigate to={route.path} />} />
        </>
      )
    )
  );
  useEffect(() => {
    if (!localStorage.getItem('deviceId')) {
      const tempId = navigator.userAgent + Math.floor(Math.random() * 10000000000000000);
      localStorage.setItem('deviceId', tempId.slice(tempId.lastIndexOf(')') + 1).trim(' '));
    }
  }, []);
  return (
    <Suspense fallback={<BackDrop open={true} />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LayoutWrapper isAuthenticated={!!authToken} />}>
            {mainContent}
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
