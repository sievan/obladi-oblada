var _ = require('underscore');
import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

var fetch = require('fetch').fetchUrl;

var missing_server_data = {  //var fan är avis?
  image: 'http://www.stansfieldmotors.com/uploads/missing_image.jpg',
  title: '<insert title here>',
  renter: {
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
  getAll() {
    fetch(this.baseUrl() + '/rentables.json', function(error, meta, body) {
      if (error) {
        console.log("rentables fetching failed");
        return;
      }

      _data['rentables'] = JSON.parse(body.toString());

      _data['rentables'].forEach(function(rentable) {
        _.extendOwn(rentable, missing_server_data);
      });
      
      RentableStore.emitChange();
    });

    return _data;
  },

  getOne(id) {
    fetch('http://localhost:3000/rentables/'+id+'.json', function(error, meta, body) {
      if (error) {
        return;
      }
      _data.selectedRentable = JSON.parse(body.toString());
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
