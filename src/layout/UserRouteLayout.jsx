import SetTokenHeader from '../hoc/SetTokenHeader/SetTokenHeader';
import axiosMain from '../http/axios/axios_main';

import './index.css';
import Header from '../components/Header/Header';

function UserRouteLayout({ children }) {
  return (
    <div className="main_body">
      <Header />
      <div className="container mt-3">{children}</div>
    </div>
  );
}

export default SetTokenHeader(UserRouteLayout, axiosMain, 'authToken');
