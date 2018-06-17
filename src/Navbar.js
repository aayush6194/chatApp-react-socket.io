import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem} from 'react-bootstrap';

class Navbar extends React.Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
          <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav">
          <NavItem>
            <Link to="/home" >
              Home
            </Link>
          </NavItem>
            <NavItem>
            <Link to="/profile" >
            Profile
            </Link>
            </NavItem>
          </ul>
        </div>
      </nav>
        </div>
    );
  }
}

export default Navbar;
