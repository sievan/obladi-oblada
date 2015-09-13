var _ = require('underscore');

import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';

import { Router, Route, Link } from 'react-router';

var defaults = {
  image: 'http://www.stansfieldmotors.com/uploads/missing_image.jpg',
  title: '<insert title here>',
  renter: {
    name: 'T. Testsson',
    img: 'http://www.danubeconsul.eu/female.jpg',
    uri: 'https://www.facebook.com/jacob.sievers?fref=ts'
  }
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
          <div className="item-desc">
            <Link to={`/rentable/${rentable.id}`}>
          <h4>{rentable.title} ({rentable.id})</h4>
            </Link>
          <p>{rentable.description}</p>
          </div>

        <div className="renter-info">
        <img src={rentable.renter.img}/>
        <h4>{rentable.renter.name}</h4>
        <Button bsStyle="info">Contact now</Button>
        </div>
        </div>
      </ListGroupItem>
    );
  }
});
