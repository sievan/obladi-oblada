import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',
  USER_SIGNED_OUT: 'signed_out',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    TASK_ADDED: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
