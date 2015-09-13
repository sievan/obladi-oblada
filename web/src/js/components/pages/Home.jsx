import React from 'react';

import Button from 'react-bootstrap/lib/Button';

var Home = React.createClass({
  componentWillMount: function(){

    document.body.style.backgroundImage = 'url("http://blog.visitnapavalley.com/wp-content/uploads/2014/07/napa-valley-bicycles-iStock_000015544672Large.jpg")';

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'left 17%';
  },
  componentWillUnmount: function(){
    document.body.style.background = null;
  },

  
  onClickRedirect() {
    console.log('clicked');
    window.location.href = "/#/rentlist";
  },

  render() {
    return (
      <div>
      <h1 className="fulhack" >
        For your needs now, <br/>and your consience later.
        </h1>
        <Button bsStyle="info" className="home-cta" onClick={this.onClickRedirect}>Lets rent some stuff!</Button>
      </div>
    );
  }
});

export default Home;
