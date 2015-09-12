import React from 'react';

import BrainTreePaymentForm from './BrainTreePaymentForm.jsx';

import PaymentService from '../../services/PaymentService';

var Payment = React.createClass({
  handleNonceRecived(e) {
    e.preventDefault();
    console.log("getNonce", e);

    PaymentService.doPayment(e);
  },

  render() {
    return (
      <form id="checkout" method="post">
        <BrainTreePaymentForm onNonceReceived={this.handleNonceRecived}/>
        <input type="submit" value="Pay $10" />
      </form>
    )
  }
});

export default Payment;
