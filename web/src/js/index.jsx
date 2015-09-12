import React from 'react';
import RentablesList from './components/RentablesList.jsx';
import AppContainer from './components/AppContainer.jsx';

import { Router, Route, Link } from 'react-router'

import Payment from './components/payment/Payment.jsx';

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* change the <a>s to <Links>s */}
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rentlist">I wanna rent someting!</Link></li>
          <li><Link to="/pay">Do Payment!</Link></li>
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

var RentList = React.createClass({
  render() {
    return (
      <RentablesList />
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="rentlist" component={RentList} />
      <Route path="pay" component={Payment} />
    </Route>
  </Router>
), document.body)

// React.render(<AppContainer />, document.getElementById('main'));
