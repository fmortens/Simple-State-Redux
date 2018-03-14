import { combineReducers } from 'redux';

import { DATA_AVAILABLE, DATA_LOADING } from '../actions/'; //Import the actions types constant we defined in our actions

let dataState = {
  data: null,
  loading: false
};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, {
        data: action.data,
        loading: false
      });

      return state;

    case DATA_LOADING:
      state = Object.assign({}, state, {
        data: [],
        loading: true
      });

      return state;

    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
