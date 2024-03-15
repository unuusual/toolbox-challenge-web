// actions.js
export const ACT_CSV_DATA_REQUEST = 'ACT_CSV_DATA_REQUEST';
export const ACT_CSV_DATA_SUCCESS = 'ACT_CSV_DATA_SUCCESS';
export const ACT_CSV_DATA_FAILURE = 'ACT_CSV_DATA_FAILURE';

export const actCsvDataRequest = () => ({
  type: ACT_CSV_DATA_REQUEST
});

export const actCsvDataSuccess = (data) => ({
  type: ACT_CSV_DATA_SUCCESS,
  payload: data
});

export const actCsvDataFailure = (error) => ({
  type: ACT_CSV_DATA_FAILURE,
  payload: error
});
