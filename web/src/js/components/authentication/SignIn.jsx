import React, {PropTypes} from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router'
import Popout from 'react-popout';

import UserStore from '../../stores/UserStore';

var UUID = require('uuid-js');

import AuthenticationService from '../../services/AuthenticationService';

var token = UUID.create().toString();

var url = AuthenticationService.loginUrl(token);

var SignIn= React.createClass({
  getInitialState: function() {
    UserStore.addChangeListener(this._onChange);

    return this._setState();
  },

  _onChange() {
    console.log('changing');
    this.setState(
      {
        isSignedIn: UserStore.isSignedIn(),
        token: UserStore.getToken()
      }
    )
    this.forceUpdate();
  },

  _setState() {
    return {
      isPoppedOut: false,
      isSignedIn: UserStore.isSignedIn(),
      token: UserStore.getToken()
    }
  },

  handleAuthenticate() {
    this.setState({isPoppedOut: true});
  },

  popoutClosed() {
    console.log('popup closed!');
    this.setState({isPoppedOut: false});
    AuthenticationService.getSignupToken(token);
  },

  handleSignout() {
    localStorage.removeItem('token');
    UserStore.logout();
  },

  render() {
    if (this.state.isSignedIn) {
      return (
        <div>
          <Button bsStyle="success" onClick={this.handleSignout}>Sign out</Button>
        </div>
      )
    } else {
      if (this.state.isPoppedOut) {
        return (
          <Popout url={url} title='Authentication' onClosing={this.popoutClosed}>
            <div>Authentication</div>
          </Popout>
        )
      } else {
        return (
          <div>
            <Button bsStyle="success" onClick={this.handleAuthenticate}>Login with paypal</Button>
          </div>
        )
      }
    }
  }
});

export default SignIn;
