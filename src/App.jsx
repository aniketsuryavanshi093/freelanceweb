import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  createjobroutes,
  createprofileroutes,
  guestRoutes,
  userRoutes
} from './routes/mainRoutes/mainRoutes';
import { LayoutWrapper, ScrollToTop } from './components';
import BackDrop from './components/spinner/BackDrop';
import { ToastContainer } from 'react-toastify';
import CreateProfile from './views/signUp/createProfile/CreateProfile';
import CreateJobCOntainer from './views/Client/CreateJob';

function App() {
  let authToken = localStorage.getItem('authToken');
  let createuserauthToken = localStorage.getItem('createUserauthToken');
  let routes = [];
  if (!authToken || !createuserauthToken) routes = guestRoutes;
  else routes = userRoutes;
  const mainContent = routes.map((route) =>
    route.component ? (
      <>
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          name={route.name}
          element={<route.component />}
        />
        {!createuserauthToken && authToken && (
          <Route path="createjob" element={<CreateJobCOntainer />}>
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
                  <Route path="*" key={route.name} element={<Navigate to="/" />} />
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
          {!authToken && <Route path="/" key={route.name} element={<Navigate to={route.path} />} />}
          <Route path="*" key={route.name} element={<Navigate to={route.path} />} />
        </>
      )
    )
  );
  useEffect(() => {
    // create device ID
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
