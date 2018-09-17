import {
  API_FETCH,
  CLEAR_STATE
} from '../Actions/types';

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_FETCH:
      return {data: [...state.data, ...action.payload]};
    case CLEAR_STATE:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
};
