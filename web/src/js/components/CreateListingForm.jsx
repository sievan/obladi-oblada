import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = this.refs.name.getValue()
    var description = this.refs.description.getValue()
    var price = this.refs.price.getValue()
    if (!description || !name || !price) {
      return;
    }

    fetch('http://localhost:3000/rentables', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price
      })
    })

    this.refs.name.getInputDOMNode().value = '';
    this.refs.description.getInputDOMNode().value = '';
    this.refs.price.getInputDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <Input type="text" label="Name" placeholder="Name of item" ref="name" />
        <Input type="text" label="Description" placeholder="Short description" ref="description" />
        <Input type="text" label="Price" placeholder="Price" ref="price" />
        <Input type="submit" value="Post" />
      </form>
    );
  }
});
