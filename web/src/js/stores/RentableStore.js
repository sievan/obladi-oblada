import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

var fetch = require('fetch').fetchUrl;

// data storage
let _data = {
  rentables: []
};


// Facebook style store creation.
const RentableStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {
    fetch(this.baseUrl + 'rentables.json', function(error, meta, body) {
      if (error) {
        console.log("rentables fetching failed");
        return;
      }

      _data['rentables'] = JSON.parse(body.toString());
      RentableStore.emitChange();
    });

    return _data;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
      // TODO(mattis): register changed action
  })
});

export default RentableStore;
