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
            <img src={rentable.owner.img}/>
            <h4>{rentable.owner.name}</h4>
            <Button bsStyle="info" href={rentable.owner.uri}>Contact now</Button>
          </div>
        </div>
      </ListGroupItem>
    );
  }
});
