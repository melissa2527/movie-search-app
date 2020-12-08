
import React from "react";
import {Link} from 'react-router-dom';
import {URL} from './config/urls';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div>
        <h3>Nav!</h3>
        <ul>
            <li><Link to={URL.HOME}>Home</Link></li>
            <li><Link to={URL.USERS}>Users</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Nav;