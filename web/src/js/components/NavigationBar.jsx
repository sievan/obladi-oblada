import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router'

var NavigationBar = React.createClass({
  render() {
    return (
      <Navbar brand="React-Bootstrap">
        <Nav>
          <NavItem><Link to="/home">Home</Link></NavItem>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/rentlist">I wanna rent someting!</Link></NavItem>
          <NavItem><Link to="/pay">Do Payment!</Link></NavItem>
        </Nav>
      </Navbar>
    )
  }
});

export default NavigationBar;