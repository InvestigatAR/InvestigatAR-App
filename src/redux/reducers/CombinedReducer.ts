import {combineReducers} from 'redux';
import {userSessionReducer} from './UserSessionReducer';

const combinedReducer = combineReducers({
  userSession: userSessionReducer,
});

export default combinedReducer;
