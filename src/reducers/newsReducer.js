import { REQUEST_NEWS, RECEIVE_NEWS } from '../actions/newsActions'

const initState = {
  data: []
}

export default (state = initState, action) => {
  switch(action.type) {
    case REQUEST_NEWS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NEWS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}