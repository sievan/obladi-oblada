import React, {PropTypes} from 'react';
import RentableStore from '../stores/RentableStore';
import Rentable from './Rentable.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';
import {Button} from 'react-bootstrap';

export default React.createClass({
  
  getInitialState() {
    return RentableStore.getAll();
  },

  render() {
    let {rentables} = this.state;

    return (
      <div>
        <ListGroup>
        {rentables.map(rentable =>
          <Rentable key={rentable.id} rentable={rentable}/>
        )}
        </ListGroup>
      </div>
    );
  }
});
