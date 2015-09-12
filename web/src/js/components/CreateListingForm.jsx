import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getValue()
    var description = this.refs.description.getValue()
    if (!description || !name) {
      return;
    }

    $.ajax({
      url: "http://localhost:3000/",
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    this.refs.name.getInputDOMNode().value = '';
    this.refs.description.getInputDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <Input type="text" placeholder="Name of item" ref="name" />
        <Input type="text" placeholder="Short description" ref="description" />
        <Input type="submit" value="Post" />
      </form>
    );
  }
});
