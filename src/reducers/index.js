import { combineReducers } from 'redux'

const initialFeedState = []

function feed (state = initialFeedState, action) {

  switch (action.type) {
    default :
      return state
  }
}

export default combineReducers({
  feed
})
