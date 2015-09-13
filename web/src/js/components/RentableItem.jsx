var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import { Router, Route, Link } from 'react-router'

import RentableStore from '../stores/RentableStore';

var defaults = {
    image: 'http://media.treehugger.com/assets/images/2015/04/1-haibike-xduro-nduro-pro.jpg.662x0_q70_crop-scale.jpg'
};

export default React.createClass({

  getInitialState: function() {
    RentableStore.addChangeListener(this._onUpdate)
    return {rentable: RentableStore.getOne(this.props.params.id)}
  },

  _onUpdate() {
    this.forceUpdate();
  },

  book: function() {
    var data = new FormData();
    data.append('rental[rentable_id]', this.props.params.id);
    data.append('rental[user_id]', 1); // TODO: change to real user id
    fetch('http://localhost:3000/rentals', {
      method: 'post',
      body: data
    })
  },

  render() {
    let {rentable} = this.state;

    _.extendOwn(rentable.selectedRentable, defaults); //add from defaults that aren't present
    console.log(this.state.rentable.selectedRentable)

    if(!this.state.rentable.selectedRentable) {
      return (
        <div> Loading... </div>
      )
    }
    else {
      return (
        <div>
          <img src={this.state.rentable.selectedRentable.image} />
          <h2>{this.state.rentable.selectedRentable.title}</h2>
          <p>{this.state.rentable.selectedRentable.description}</p>
          <Button bsStyle="success" onClick={this.book}>Book!</Button>
        </div>
      );
    }
  }
});
