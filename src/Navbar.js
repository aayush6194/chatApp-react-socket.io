import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap';

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav">
          <NavItem>
            <Link to="/" >
              Home
            </Link>
          </NavItem>
            <NavItem>
            <Link to="/profile" >
            Profile
            </Link>
            </NavItem>
          </ul>

          <DropdownButton   title={"Welcome " + this.props.user+ "!"}>
            <MenuItem divider />
            <MenuItem onClick={this.props.logout}>Logout</MenuItem>
          </DropdownButton>

      </nav>

      </div>
    );
  }
}

export default Navbar;
