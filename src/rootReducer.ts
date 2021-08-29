import { combineReducers } from 'redux';

import user from 'src/pages/Login/slice';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
