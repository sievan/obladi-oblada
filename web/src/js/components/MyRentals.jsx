import React, {PropTypes} from 'react';
import RentableStore from '../stores/RentableStore';
import MyRentable from './MyRentable.jsx';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';
import {Button} from 'react-bootstrap';

export default React.createClass({

  getInitialState() {
    RentableStore.addChangeListener(this._onUpdate);

    return RentableStore.getAll(1); // TODO: add real user id
  },

  _onUpdate() {
    this.forceUpdate();
  },

  render() {
    let {rentables} = this.state;

    return (
      <div>
        <ListGroup>
        {rentables.map(rentable =>
          <MyRentable key={rentable.id} rentable={rentable}/>
        )}
        </ListGroup>
      </div>
    );
  }
});
