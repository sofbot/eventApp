import * as FacebookAPI from './utils/facebook_api_utils.js';

// Action type constants
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// Actions

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


// Action creators
export const fetchUserFBInfo = token => dispatch => (
  FacebookAPI.fetchUserFBInfo(token)
  .then(user => dispatch(receiveUser(user)))
  .then(user => dispatch(FacebookAPI.sendUserInfo(user,token)))
  .fail(errors => dispatch(console.log(errors)))
);
