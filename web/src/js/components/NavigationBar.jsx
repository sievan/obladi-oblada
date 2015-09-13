import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router'

import UserStore from '../stores/UserStore';

import SignIn from './authentication/SignIn.jsx';

var NavigationBar = React.createClass({
  getInitialState: function() {
    UserStore.addChangeListener(this._onUpdate)
    return {isSignedIn: UserStore.isSignedIn()}
  },

  _onUpdate() {
    this.setState({isSignedIn: !this.state.isSignedIn});
    console.log('force update', this.state.isSignedIn);
    this.forceUpdate();
  },

  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <Navbar brand="Obla" inverse toggleNavKey={0}>
            <Nav eventKey={0}>
              <NavItem><Link to="/rentlist">I wanna rent someting!</Link></NavItem>
              <NavItem><Link to="/add-item">I have something to rent out!</Link></NavItem>
              <NavItem><SignIn /></NavItem>
              <NavItem><Link to="/add_payment_option">Profile</Link></NavItem>
            </Nav>
          </Navbar>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar brand="HandyMan" inverse toggleNavKey={0}>
            <Nav eventKey={0}>
              <NavItem><Link to="/rentlist">I wanna rent someting!</Link></NavItem>
              <NavItem><SignIn /></NavItem>
            </Nav>
          </Navbar>
        </div>
      )
    }
  }
});

export default NavigationBar;