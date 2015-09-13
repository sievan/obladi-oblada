var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import { Router, Route, Link } from 'react-router'

import RentableStore from '../stores/RentableStore';
import UserStore from '../stores/UserStore';

var defaults = {
    image: 'http://media.treehugger.com/assets/images/2015/04/1-haibike-xduro-nduro-pro.jpg.662x0_q70_crop-scale.jpg'
};

var style = {
  maxWidth: '100%'
}

export default React.createClass({
  getInitialState: function() {
    RentableStore.addChangeListener(this._onUpdate)
    RentableStore.isBooked(this.props.params.id)
    .then( (res) => {
      this.setHasBeenBooked(res);
    });

    return {
      rentable: RentableStore.getOne(this.props.params.id),
      hasBeenBooked: false,
      bookMessage: "Book!"
    }
  },

  _onUpdate() {
    this.forceUpdate();
  },

  book: function() {
    if (this.state.hasBeenBooked) {
      return;
    }
    var data = new FormData();
    data.append('rental[rentable_id]', this.props.params.id);

    //data.append('rental[user_id]', user_id); // TODO: change to real user id
    fetch(RentableStore.baseUrl() + '/rentals', {
      method: 'post',
      body: data
    })

    this.setHasBeenBooked(true);
  },

  setHasBeenBooked(hasBeenBooked) {
    this.setState({hasBeenBooked: hasBeenBooked});
    if (hasBeenBooked) {
      this.setState({bookMessage: "Booked it!"});
    }
  },

  render() {
    let {rentable} = this.state;
    console.log(this.state);

    _.extendOwn(rentable.selectedRentable, defaults); //add from defaults that aren't present

    if(!this.state.rentable.selectedRentable) {
      return (
        <div> Loading... </div>
      )
    }
    else {
      var hidden = { display: 'none'}
      return (
        <div>
          <img style={style} src={this.state.rentable.selectedRentable.image} />
          <h2>{this.state.rentable.selectedRentable.title}</h2>
          <p>{this.state.rentable.selectedRentable.description}</p>

          <Button bsStyle={!this.state.hasBeenBooked ? 'success' : 'default'} onClick={this.book}>{this.state.bookMessage}</Button>
          <span style={!this.state.hasBeenBooked ? hidden : {}}>Waiting approval of the other partie</span>
        </div>
      );
    }
  }
});
