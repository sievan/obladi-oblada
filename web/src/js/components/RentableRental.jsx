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
    fetch('http://localhost:3000/rentals/' + this.props.rental.id, {
      method: 'post',
      body: data
    })
  },

  render() {
    let {rental} = this.props;
    return (
      <div>
        <Button bsStyle="success" onClick={this.approveRental} >Approve rental</Button>
      </div>
    );
  }
});
