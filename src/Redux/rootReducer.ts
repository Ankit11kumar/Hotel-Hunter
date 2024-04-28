import { combineReducers } from 'redux';
import hotelsAndPlacesReducer from './hotelsAndPlaces/slice';

export const reducersMap = {
  hotelsAndPlaces: hotelsAndPlacesReducer
}

export const rootReducer = combineReducers(reducersMap)

export default rootReducer;
