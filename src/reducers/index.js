import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import films from './films';

const rootReducer = combineReducers({
  routing,
  films,
});

export default rootReducer;
