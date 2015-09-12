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
        <span>{rentable.id}</span>
      </ListGroupItem>
    );
  }
});
