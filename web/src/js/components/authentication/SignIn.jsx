import React, {PropTypes} from 'react';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router'

var SignIn= React.createClass({
  handleAuthenticate() {
    window.location.assign("http://35693163.ngrok.io/login");
  },
  render() {
    var style = {float: 'right'};
    return (
      <div>
        <Button onClick={this.handleAuthenticate} >Login with paypal</Button>
      </div>
    )
  }
});

export default SignIn;
