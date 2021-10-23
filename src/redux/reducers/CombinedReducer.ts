import {combineReducers} from 'redux';
import {userSessionReducer} from './UserSessionReducer';
import { productScanReducer } from "./ProductScannedReducer";

const combinedReducer = combineReducers({
  userSession: userSessionReducer,
  productScan: productScanReducer,
});

export default combinedReducer;
