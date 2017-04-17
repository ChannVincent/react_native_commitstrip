import {
  FEED_FETCH_PENDING,
  FEED_FETCH_SUCCESS,
  FEED_FETCH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  pending: false,
  newsList: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEED_FETCH_PENDING:
      console.log(FEED_FETCH_PENDING);
      return { ...state, pending: true };

    case FEED_FETCH_FAIL:
      console.log(FEED_FETCH_FAIL);
      return { ...state, pending: false };

    case FEED_FETCH_SUCCESS:
      console.log(FEED_FETCH_SUCCESS);
      return { ...state, pending: false, newsList: action.payload.data };

    default:
      return state;
  }
}
