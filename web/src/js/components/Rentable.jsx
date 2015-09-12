var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

var defaults = {
    image: 'http://media.treehugger.com/assets/images/2015/04/1-haibike-xduro-nduro-pro.jpg.662x0_q70_crop-scale.jpg'
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
          <a href={rentable.url}>
            <h4>This is the title of item {rentable.id}</h4>
          </a>
        <p>{rentable.description}</p>
        </div>
        </div>
      </ListGroupItem>
    );
  }
});
