import {
  FEED_FETCH_SUCCESS,
  FEED_FETCH_PENDING,
  FEED_FETCH_FAIL
} from './types';
import axios from 'axios';

export const feedFetchPending = (url) => {
  console.log('url pending : ' + url);
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
