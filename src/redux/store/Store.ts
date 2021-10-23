import combinedReducer from '../reducers/CombinedReducer';
import {createStore} from 'redux';

export const store = createStore(combinedReducer);
