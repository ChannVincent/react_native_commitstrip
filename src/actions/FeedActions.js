import {
  FEED_FETCH_SUCCESS,
  FEED_FETCH_PENDING,
  FEED_FETCH_FAIL,
  FEED_FETCH_RANDOM_SUCCESS,
  FEED_FETCH_RANDOM_PENDING,
  FEED_FETCH_RANDOM_FAIL
} from './types';
import axios from 'axios';

export const feedFetchPending = (url) => {
  console.log('url news pending : ' + url);
  return (dispatch) => {
    dispatch({
      type: FEED_FETCH_PENDING
    });
    axios.get(url)
      .then(response => {
        dispatch({
          type: FEED_FETCH_SUCCESS,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: FEED_FETCH_FAIL
        });
      });
  }
}

export const feedFetchRandomPending = (url) => {
  console.log('url random pending : ' + url);
  return (dispatch) => {
    dispatch({
      type: FEED_FETCH_RANDOM_PENDING
    });
    axios.get(url)
      .then(response => {
        dispatch({
          type: FEED_FETCH_RANDOM_SUCCESS,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: FEED_FETCH_RANDOM_FAIL
        });
      });
  }
}
