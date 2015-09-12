import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getValue()
    var description = this.refs.description.getValue()
    var price = this.refs.price.getValue()
    var image = this.refs.image.getInputDOMNode()
    if (!description || !title || !price) {
      return;
    }
    var data = new FormData();
    data.append('rentable[title]', title);
    data.append('rentable[description]', description);
    data.append('rentable[price]', price);
    data.append('rentable[image]', image.files[0]);

    fetch('http://localhost:3000/rentables', {
      method: 'post',
      body: data
    })

    this.refs.title.getInputDOMNode().value = '';
    this.refs.description.getInputDOMNode().value = '';
    this.refs.price.getInputDOMNode().value = '';
    this.refs.image.getInputDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form name="rentable" onSubmit={this.handleSubmit}>
        <Input type="text" label="Name" placeholder="Name of item" ref="title" />
        <Input type="text" label="Description" placeholder="Short description" ref="description" />
        <Input type="text" label="Price" placeholder="Price" ref="price" />
        <Input type="file" ref="image" />
        <Input type="submit" value="Post" />
      </form>
    );
  }
});
