import React from 'react';
import {Input, Button, Alert} from 'react-bootstrap';
import UserStore from '../stores/UserStore';

export default React.createClass({

  getInitialState() {
    return {invalid: {description: false, title: false, price: false}, error: null}
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var title = this.refs.title.getValue()
    var description = this.refs.description.getValue()
    var price = this.refs.price.getValue()
    var image = this.refs.image.getInputDOMNode()

    this.setState({invalid: {description: !description, title: !title, price: !price}});

    if (!description || !title || !price) {
      console.log("failed");
      this.forceUpdate();
      return;
    }

    var data = new FormData();
    data.append('rentable[title]', title);
    data.append('rentable[description]', description);
    data.append('rentable[price]', price);
    data.append('rentable[image]', image.files[0]);
    data.append('rentable[user_id]', UserStore.getCurrentUser());

    fetch(UserStore.baseUrl() + '/rentables.json', {
      method: 'post',
      body: data
    }).then( (res) => {
      if (!res.ok) {
        console.log('not ok', res );
        this.setState({error: "Could not save! :/"});
        return;
      }
      console.log("success", res);

      this.refs.title.getInputDOMNode().value = '';
      this.refs.description.getInputDOMNode().value = '';
      this.refs.price.getInputDOMNode().value = '';
      this.refs.image.getInputDOMNode().value = '';
      this.setState({error: ""});
      window.location.href = '#/rentlist';

    }).catch( (err) => {
      console.error("err", err);
      this.setState({error: "Could not save! Please try again."});
    });
  },

  render: function() {
    var {invalid} = this.state;
    console.log(invalid);
    var errorMessage = {};

    if (this.state.error) {
      errorMessage = (<Alert bsStyle="warning">
        <strong>{this.state.error}</strong>
      </Alert>)
    }

    return (
      <div className="add_rentable">
        <form name="rentable" >
          <h1 className="title">List your product or service</h1>
          {errorMessage}
          <Input type="text" bsStyle={!invalid.title ? null : "error"} label="Name" placeholder="Name of item" ref="title" />
          <Input type="textarea" bsStyle={!invalid.description ? null : "error"} label="Description" placeholder="Short description" ref="description" />
          <Input type="text" bsStyle={!invalid.price ? null : "error"} label="Price" placeholder="Price" addonAfter="SEK" ref="price" />
          <Input type="file" ref="image" />
          <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit}>Post</Button>
        </form>
      </div>
    );
  }
});
