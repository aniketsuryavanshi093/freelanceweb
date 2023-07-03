import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { USERPROFILEDUMMY } from '../../assets/images';
import './header.css';

const Header = () => {
  const [Value, setValue] = useState('');
  const freelanceroute = [
    {
      path: '/',
      label: 'Find work'
    },
    {
      path: '/myjobs',
      label: 'My Jobs'
    },
    {
      path: '/chat',
      label: 'Messages'
    }
  ];
  const currentuser = useSelector((state) => state?.auth?.login?.loginuser);
  const [Menu, setMenu] = useState(false);
  const handleLogout = async () => {
    localStorage.clear();
    window.location.reload();
  };
  //   const clientroute = {};
  return (
    <div className="header  justify-between wrapper">
      <div className="wrapper cp justify-start">
        <Link to="/">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="logo"
            className="logo_img"
          />
        </Link>
        <div className="mx-3 cp">
          <ul className="wrapper p-0 mb-0">
            {freelanceroute?.map((elem) => (
              <li className="headertabli mx-3" key={elem.path}>
                <Link to={elem.path}>{elem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrapper justify-end">
        <Search setValue={setValue} placeholder="search" minSearchChar={3} />
        <i className="fa-regular cp bellicon fa-bell mx-3"></i>
        <Dropdown
          isOpen={Menu}
          toggle={() => {
            setMenu(!Menu);
          }}
          className="d-inline-block">
          <DropdownToggle
            className=" header-item pe-0 waves-effect"
            id="page-header-user-dropdown"
            tag="button">
            <div className="wrapper px-2">
              <img
                src={currentuser?.profilePic || USERPROFILEDUMMY}
                alt="userprofile"
                className="headerprofile cp"
              />
              <i className="uil-angle-down ms-2 d-none d-xl-inline-block font-size-15" />
            </div>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <Link to="/profile">
              <DropdownItem tag="span">
                <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1" />
                Profile
              </DropdownItem>
            </Link>
            <Link to="/support">
              <DropdownItem tag="span" className="cp">
                <i className="uil uil-comment-alt-question font-size-18 align-middle text-muted me-1" />
                Support
              </DropdownItem>
            </Link>
            <Link to="/notification" className="d-none">
              <DropdownItem tag="span" className="cp">
                <i className="uil uil-bell font-size-18 align-middle text-muted me-1" />
                Notification
              </DropdownItem>
            </Link>
            <button type="button" onClick={handleLogout} className="dropdown-item">
              <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted" />
              Logout
            </button>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
