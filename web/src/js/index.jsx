import React from 'react';
import AppContainer from './components/AppContainer.jsx';

import { Router, Route, Link } from 'react-router'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div>
    )
  }
})

var Home = React.createClass({
  render() {
    return (
      <div>
        Welcome to obladi!
      </div>
    )
  }
})

var About = React.createClass({
  render() {
    return (
      <div>
        This is a pretty sweet webapp, right?
      </div>
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.body)

// React.render(<AppContainer />, document.getElementById('main'));
