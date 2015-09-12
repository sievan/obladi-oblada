import React from 'react';
import RentablesList from './components/RentablesList.jsx';
import AppContainer from './components/AppContainer.jsx';

import { Router, Route, Link } from 'react-router'

import Payment from './components/payment/Payment.jsx';

import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import NavigationBar from './components/NavigationBar.jsx';

import SignIn from  './components/authentication/SingIn.jsx';


var App = React.createClass({
  handleAuthentication() {
    console.log('auth');
  },

  render() {
    return (
      <div>
        <NavigationBar />

        <div className="container">
          {this.props.children}
        </div>
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

