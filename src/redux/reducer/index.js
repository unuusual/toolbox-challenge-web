import { combineReducers } from 'redux';
import { ACT_CSV_DATA_REQUEST, ACT_CSV_DATA_SUCCESS, ACT_CSV_DATA_FAILURE } from '../actions/index';

const initialState = {
  csvData: [],
  error: null
};

const csvDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_CSV_DATA_REQUEST:
      return {
        ...state,
        error: null
      };
    case ACT_CSV_DATA_SUCCESS:
      return {
        ...state,
        csvData: action.payload,
        error: null
      };
    case ACT_CSV_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  csvData: csvDataReducer
});
