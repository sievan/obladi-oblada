import React from 'react';

import BrainTreePaymentForm from './BrainTreePaymentForm.jsx';

var Payment = React.createClass({

  render() {
    return (
      <form id="checkout" method="post" action="/checkout">
        <BrainTreePaymentForm />
        <input type="submit" value="Pay $10" />
      </form>
    )
  }
});

export default Payment;
