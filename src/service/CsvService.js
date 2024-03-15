// NameListCsvService.js
import { useDispatch } from 'react-redux';
import { actCsvDataRequest, actCsvDataSuccess, actCsvDataFailure } from '../redux/actions/index';

export const useCsvData = () => {
  const dispatch = useDispatch();

  const fetchData = async (fileName) => {
    dispatch(actCsvDataRequest());
    try {
      const endpoint = `http://localhost:3000/files/data?fileName=${fileName || ''}`;
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const sortedData = data.sort((a, b) => {
        return b.lines.length + a.lines.length;
      });
      
      if (sortedData.msg === 'File not found.') {
        const error = 'File not found.'
        return dispatch(actCsvDataFailure(error));
      }
      dispatch(actCsvDataSuccess(sortedData));
    } catch (err) {
      dispatch(actCsvDataFailure(err));
    }
  };

  return {
    fetchData
  };
};
