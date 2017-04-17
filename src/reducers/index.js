import { combineReducers } from 'redux';
import NavigationReducer from './NavigationReducer';
import FeedReducer from './FeedReducer';

export default combineReducers({
  navigation: NavigationReducer,
  feed: FeedReducer
})
