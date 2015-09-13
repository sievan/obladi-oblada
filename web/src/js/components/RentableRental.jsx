var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import { Router, Route, Link } from 'react-router'


export default React.createClass({
  approveRental() {
    console.log(this.props);
    var data = new FormData();
    data.append('rental[approved_by_owner]', true);
    fetch('http://f4f0e449.ngrok.io/rentals/' + this.props.rental.rental.id, {
      method: 'post',
      body: data
    })
    this.props.rental.rental.approved_by_owner = true;
    this.forceUpdate();
  },

  render() {
    let {rental} = this.props;
    if(this.props.rental.rental.approved_by_owner) {
      return (
        <div>Rental approved. Money is on its way. </div>
      );
    }
    else {
      return (
        <div>
          <div>{this.props.rental.user.name} wants to rent this!</div>
          <Button bsStyle="success" onClick={this.approveRental} >Approve rental</Button>
        </div>
      );
    }
  }
});
