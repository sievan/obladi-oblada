var _ = require('underscore');

import React, {PropTypes} from 'react';
import RentableStore from '../stores/RentableStore';
import Rentable from './Rentable.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';
import {Button, Input} from 'react-bootstrap';

export default React.createClass({
  
  getInitialState() {
    RentableStore.addChangeListener(this._onUpdate);
    var newState = RentableStore.getAll();
    _.extend(newState, {searchQuery: ''});
    return newState;
  },

  _onUpdate() {
    this.forceUpdate();
  },

  handleChange() {
    this.setState({
      searchQuery: this.refs.input.getValue()
    });
  },
  
  render() {
    let {searchQuery, rentables} = this.state;
    
    var rows = [];
    rentables.forEach(function(rentable) {
      if (searchQuery == '' || rentable.description.indexOf(searchQuery) > -1)
        rows.push(<Rentable key={rentable.id} rentable={rentable}/>);
    });
    
    return (
      <div>
        <Input
          type="text"
          ref="input"
          value={this.state.searchQuery}
          placeholder="Enter text to search..."
          onChange={this.handleChange}
        />
        
        <ListGroup>
        {rows}
        </ListGroup>
      </div>
    );
  }
});
