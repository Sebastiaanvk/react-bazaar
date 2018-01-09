import { combineReducers } from 'redux';
import { RECEIVE_POSTS } from '../actions';

const initialFeedState = []

function feed (state = initialFeedState, action) {
  const { posts } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return {
        posts
      }

    default :
      return state
  }
}

export default combineReducers({
  feed
})
