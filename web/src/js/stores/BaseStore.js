import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

export default assign({}, EventEmitter.prototype, {
  // Allow Controller-View to register itself with store
  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  },

  baseUrl() {
    return 'http://localhost:3000'; //'http://f4f0e449.ngrok.io';
  },
});
