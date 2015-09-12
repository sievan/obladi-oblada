var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
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
        </div>
      );
    }
  }
});
