import { combineReducers } from 'redux';

import listsReducer from './lists';
import authReducer from './auth';

// combiner les reducers pour former le reducer transmit à store
const rootReducer = combineReducers({
  // nomDuFragmentDeState: reducerQuiSEnCharge
  lists: listsReducer,
  auth: authReducer,
});

export default rootReducer;
