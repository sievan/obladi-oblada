import React, {PropTypes} from 'react';

import { Button } from 'react-bootstrap';

var SignIn = React.createClass({
  propTypes: {
    onAuthenticate: PropTypes.func.isRequired
  },

  render() {
    return (
      <a href="http://35693163.ngrok.io/auth/paypal?callback=https://3421d4e5.ngrok.com/" >Login with paypal</a>
    )
  }
});

export default SignIn;
