var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

import { Router, Route, Link } from 'react-router';

var defaults = {
  image: 'http://www.stansfieldmotors.com/uploads/missing_image.jpg'
};

export default React.createClass({
  
  propTypes: {
    rentable: PropTypes.object.isRequired
  },

  render() {
    let {rentable} = this.props;
    _.extendOwn(rentable, defaults); //add from defaults that aren't present
    
    return (
      <ListGroupItem>

        <div className="rentable-list_entry">
        <img src={rentable.image} />
        <div>
          {rentable.url}
          <Link to={`/rentable/${rentable.id}`}>Home
            <h4>This is the title of item {rentable.id}</h4>
          </Link>
        <p>{rentable.description}</p>
        </div>
        </div>
      </ListGroupItem>
    );
  }
});
