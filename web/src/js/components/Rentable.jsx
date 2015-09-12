var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

var defaults = {
    image: 'http://i.dailymail.co.uk/i/pix/2011/12/17/article-2075608-0F35EBF600000578-825_634x824.jpg'
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

        <img src={rentable.image} style={{height: '100px'}}/>
        <a href={rentable.url}>
          <h4>This is the title of item {rentable.id}</h4>
        </a>
        <p>{rentable.description}</span>
      </ListGroupItem>
    );
  }
});
