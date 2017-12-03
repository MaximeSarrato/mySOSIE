import { FETCH_USER, FETCH_USER_FAILED } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case FETCH_USER_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
}
