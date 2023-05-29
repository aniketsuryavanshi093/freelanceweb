import { Link } from 'react-router-dom';
import SetTokenHeader from '../hoc/SetTokenHeader/SetTokenHeader';
import axiosMain from '../http/axios/axios_main';

import './index.css';

function GuestRouteLayout({ children }) {
  return (
    <div className="main_body">
      <div className="header">
        <Link to="/">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="logo"
            className="logo_img"
          />
          <span className="web_name">FreeLance WEB login</span>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default SetTokenHeader(GuestRouteLayout, axiosMain);
