import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

var fetch = require('fetch').fetchUrl;

// data storage
let _data = [];

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

// Facebook style store creation.
const RentableStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll() {

    var loaded_rentables = fetch(
      'http://localhost:3000/rentables.json',
      function(error, meta, body) {
        console.log(body);
      }
    );



    
    return {
      rentables: [
        {
          "id":1,
          "description":"cool thing",
          "price":"9001.0",
          "owner_id":2,
          "url": "rentable/1",
          "created_at":"2015-09-12T12:34:07.674Z",
          "updated_at":"2015-09-12T12:34:07.674Z"
        },
        {
          "id":2,
          "description":"cool thing",
          "price":"9001.0",
          "owner_id":2,
          "url": "rentable/2",
          "created_at":"2015-09-12T12:34:07.674Z",
          "updated_at":"2015-09-12T12:34:07.674Z"
        },
      ]
    };

  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
      // TODO(mattis): register changed action
    
  })
});

export default RentableStore;
