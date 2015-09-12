import React from 'react';

import BrainTreePaymentForm from './BrainTreePaymentForm.jsx';
import Button from 'react-bootstrap/lib/Button';

import PaymentService from '../../services/PaymentService';

var Payment = React.createClass({
  handleNonceRecived(e) {
    e.preventDefault();
    console.log("getNonce", e);

    PaymentService.addPaymentMethod(e)
    .then( () => {
      UserStore.setCustomerId(1); //TODO. Change
      console.log("payment added");
    }).catch( (err) => {
      console.log("err", err);
    });
  },

  render() {
    return (
      <form id="checkout" method="post">
        <BrainTreePaymentForm onNonceReceived={this.handleNonceRecived}/>
        <Button bsStyle="success" type="submit">Add Card</Button>
      </form>
    )
  }
});

export default Payment;
