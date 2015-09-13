import React from 'react';
import RentablesList from './components/RentablesList.jsx';
import AppContainer from './components/AppContainer.jsx';
import ListingForm from './components/CreateListingForm.jsx';

import { Router, Route, Link } from 'react-router'

import Payment from './components/payment/Payment.jsx';
import RentableItem from './components/RentableItem.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import Authenticated from './components/pages/Authenticated.jsx';
import MyRentals from './components/MyRentals.jsx';

var App = React.createClass({
  componentWillMount() {

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
});

var RentList = React.createClass({
  render() {
    return (
      <RentablesList />
    )
  }
});

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="rentlist" component={RentList} />
      <Route path="add-item" component={ListingForm} />
      <Route path="add_payment_option" component={Payment} />
      <Route path="authenticated" component={Authenticated} />
      <Route path="my-rentals" component={MyRentals} />
      <Route path="/rentable/:id" component={RentableItem} />
    </Route>
  </Router>
), document.getElementById('main'))

