import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

import AuthenticationService from '../services/AuthenticationService';

// data storage
var data = {
  token: null,
  current_user: null
};

// Facebook style store creation.
const UserStore = assign({}, BaseStore, {
  fetchStoredState() {
    data.token = localStorage.getItem('token');
    this.setCurrentUser();
  },

  // public methods used by Controller-View to operate on data
  getToken() {
    if(!data.token) {
      data.token = localStorage.getItem('token');
      data.user_id = localStorage.getItem('user_id');
    }

    this.setCurrentUser();

    return data.token;
  },

  isSignedIn() {
    var token = this.getToken();
    return !!data.token
  },

  setToken(token, id) {
    localStorage.setItem('token', token);
    data.token = token;
    this.setCurrentUser();
    UserStore.emitChange();
  },

  setCurrentUser() {
    if (!!data.token) {
      AuthenticationService.getCurrentUser(data.token)
      .then((a) => {
        localStorage.setItem('user_id', a.user_id);
      });;
    }
  },

  getCurrentUser() {
    return data.user_id;
  },

  signOut() {
    console.log('remove token');

    data.token = null;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.USER_SIGNED_OUT:
        UserStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })
});

export default UserStore;
