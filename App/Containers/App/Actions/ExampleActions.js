import axios from 'axios';
import { API_FETCH } from './types';

const API_URL = 'https://api.example.com';

export const apiFetch = () => {
  return (dispatch) => {
    return axios.get(`${API_URL}`).then((response) => {
      dispatch({
        type: MOVIES_FETCH,
        payload: response.data.results
      });
    }).catch((error) => {
      console.log(error);
    });
  };
};
