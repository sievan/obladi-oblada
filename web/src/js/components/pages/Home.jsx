import React from 'react';

var Home = React.createClass({
  componentWillMount: function(){

    document.body.style.backgroundImage = 'url("http://blog.visitnapavalley.com/wp-content/uploads/2014/07/napa-valley-bicycles-iStock_000015544672Large.jpg")';

    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'left 20%';
  },
  componentWillUnmount: function(){
    document.body.style.background = null;
  },

  render() {
    return (
      <div className="fulhack" >
        Welcome to obladi!
      </div>
    );
  }
});

export default Home;
