import {
  FEED_FETCH_PENDING,
  FEED_FETCH_SUCCESS,
  FEED_FETCH_FAIL,
  FEED_FETCH_RANDOM_SUCCESS,
  FEED_FETCH_RANDOM_PENDING,
  FEED_FETCH_RANDOM_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  pending: false,
  newsList: [],
  pendingRandom: false,
  randomList: []
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

    case FEED_FETCH_RANDOM_PENDING:
      console.log(FEED_FETCH_RANDOM_PENDING);
      return { ...state, pendingRandom: true };

    case FEED_FETCH_RANDOM_FAIL:
      console.log(FEED_FETCH_RANDOM_FAIL);
      return { ...state, pendingRandom: false };

    case FEED_FETCH_RANDOM_SUCCESS:
      console.log(FEED_FETCH_RANDOM_SUCCESS);
      shuffle(action.payload.data);
      return { ...state, pendingRandom: false, randomList: action.payload.data };

    default:
      return state;
  }
}

function shuffle(array) {
  for (let i = array.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}
