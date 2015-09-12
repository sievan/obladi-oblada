import React, {PropTypes} from 'react';
import RentableStore from '../stores/RentableStore';
import Rentable from './Rentable.jsx';
import SearchField from './SearchField.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';
import {Button} from 'react-bootstrap';

export default React.createClass({
  
  getInitialState() {
    RentableStore.addChangeListener(this._onUpdate);
    return RentableStore.getAll();
  },

  _onUpdate() {
    this.forceUpdate();
  },
  
  render() {
    let {rentables} = this.state;

    return (
      <div>
        <SearchField />
        
        <ListGroup>
        {rentables.map(rentable =>
          <Rentable key={rentable.id} rentable={rentable}/>
        )}
        </ListGroup>
      </div>
    );
  }
});
