import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  authenticate(user) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.SIGNIN,
      text: text
    });
  },
};
