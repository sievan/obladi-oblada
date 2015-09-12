import React, {PropTypes} from 'react';
import PaymentService from '../../services/PaymentService';

var braintree = require('braintree-web');

var BrainTreePaymentForm = React.createClass({
  propTypes: {
    onNonceReceived: PropTypes.func.isRequired
  },

  getInitialState: function() {
    return  {
      braintreeInitialized: false
    }
  },

  initializeBraintree: function() {
    PaymentService.getClientToken()
    .then( (res) => {
      return res.json();
    })
    .then( (body) => {
      return body.token;
    })
    .then( (clientToken) => {
      console.log("token", clientToken);
      braintree.setup(clientToken, "dropin", {
        container: this.getDOMNode(),
        paymentMethodNonceReceived: this.props.onNonceReceived,
      });
    })
  },

  componentDidMount: function() {
    this.initializeBraintree(this.props);
  },

  render() {
    return (
      <div id="payment-form"></div>
    )
  }
});

export default BrainTreePaymentForm;
