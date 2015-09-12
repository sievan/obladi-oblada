import React, {PropTypes} from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  propTypes: {
    rentable: PropTypes.object.isRequired
  },

  render() {
    let {rentable} = this.props;
    
    return (
      <ListGroupItem>
        <a href={rentable.url}><h4>This is the title of item {rentable.id}</h4></a>
        <p>{rentable.description}</p>
      </ListGroupItem>
    );
  }
});
