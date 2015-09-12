import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
var data = {};

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

// Facebook style store creation.
const UserStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getToken() {
    console.log(data);
    if(!data.token) {
      data.token = localStorage.getItem('token');
    }

    return data.token;
  },

  isSignedIn() {
    var token = this.getToken();
    console.log(token, !!data.token);
    return !!data.token
  },

  setToken(token) {
    localStorage.setItem('token', token);
    data.token = token;
    UserStore.emitChange();
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
