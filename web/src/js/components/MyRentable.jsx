var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import RentableRental from './RentableRental.jsx';
import { Router, Route, Link } from 'react-router';
import UserStore from '../stores/UserStore';

export default React.createClass({

  propTypes: {
    rentable: PropTypes.object.isRequired
  },

  render() {
    let {rentable} = this.props;

    return (
      <ListGroupItem>

        <div className="rentable-list_entry">
          <img src={UserStore.baseUrl() + "/uploads/" + rentable.image} />
          <div className="item-desc">
            <h4>{rentable.title}</h4>
            <p>{rentable.description}</p>
          </div>
          <ListGroup>
          {rentable.rentals.map(rental =>
            <RentableRental rental={rental}></RentableRental>
          )}
          </ListGroup>
        </div>
      </ListGroupItem>
    );
  }
});
