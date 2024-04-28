import { combineReducers } from 'redux';
import dataReducer from './searchReducer';

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;
