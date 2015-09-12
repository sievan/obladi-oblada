import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router'

import SignIn from './authentication/SignIn.jsx';

var NavigationBar = React.createClass({
  render() {
    return (
      <div>
        <Navbar brand="HandyMan" inverse toggleNavKey={0}>
          <Nav eventKey={0}>
            <NavItem><Link to="/rentlist">I wanna rent someting!</Link></NavItem>
            <NavItem><Link to="/add-item">I have something to rent out!</Link></NavItem>
            <NavItem><Link to="/pay">Do Payment!</Link></NavItem>
            <NavItem><SignIn /></NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
});

export default NavigationBar;