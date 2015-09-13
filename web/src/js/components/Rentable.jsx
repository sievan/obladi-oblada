import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';
import UserStore from '../stores/UserStore';

import { Router, Route, Link } from 'react-router';



export default React.createClass({
  propTypes: {
    rentable: PropTypes.object.isRequired
  },

  render() {
    let {rentable} = this.props;

    var defValues = {
      profileImg: 'http://www.danubeconsul.eu/female.jpg'
    };

    return (
      <ListGroupItem>

        <div className="rentable-list_entry">
          <img src={UserStore.baseUrl() + "/uploads/" + rentable.image} />
          <div className="item-desc">
            <Link to={`/rentable/${rentable.id}`}>
            <h4>{rentable.title}</h4>
              </Link>
            <p>{rentable.description}</p>
          </div>
          <div className="owner-info">
            <img src={defValues.profileImg}/>
            <h4>{ !!rentable.user ? rentable.user.name : ""}</h4>
          </div>
        </div>
      </ListGroupItem>
    );
  }
});
