var _ = require('underscore');
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

var _  = require('underscore');
var fetchOld = require('fetch').fetchUrl;

var missing_server_data = {  //var fan är avis?
  title: '<insert title here>',
  owner: {
    name: 'T. Testsson',
    img: 'http://www.danubeconsul.eu/female.jpg',
    uri: 'https://www.facebook.com/jacob.sievers?fref=ts'
  }
};

// data storage
let _data = {
  rentables: [],
  selectedRentable: null
};

// Facebook style store creation.
const RentableStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getAll(userId = null) {
    var param = '';
    if(userId) {
      param = '?owner_id='+userId;
    }

    fetchOld(this.baseUrl() + '/rentables.json'+param, function(error, meta, body) {
      if (error) {
        console.log("rentables fetching failed");
        return;
      }

      _data['rentables'] = JSON.parse(body.toString());

      _data['rentables'].forEach(function(rentable) {
        _.defaults(rentable, missing_server_data);
      });

      RentableStore.emitChange();
    });

    return _data;
  },

  getOne(id) {
    fetchOld(this.baseUrl() + '/rentables/'+id+'.json', function(error, meta, body) {
      if (error) {
        return;
      }
      _data.selectedRentable = JSON.parse(body.toString());
      RentableStore.emitChange();
    });

    return _data;
  },

  isBooked(rentables_id) {
    console.log("rentables_id", rentables_id);
    return fetch(this.baseUrl() + '/rentals.json?rentable_id=' + rentables_id)
    .then( (res) => {
      return res.json();
    }).then( (rentals) => {
      var current_user = 1;
      var returnValue = _.chain(rentals)
        .filter((rental) => {
          return rental.user_id === current_user;
        })
        .size()
        .value();

      return returnValue !== 0;
    });

  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
      // TODO(mattis): register changed action
  })
});

export default RentableStore;
