import { CREATE_USER, CREATE_USER_FAILED } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case CREATE_USER_FAILED:
      return action.payload;
    default:
      return state;
  }
}
