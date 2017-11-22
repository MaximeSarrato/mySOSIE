import { FETCH_PROMOTIONS, CLEAR_PROMOTIONS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_PROMOTIONS:
      return action.payload || false;
    case CLEAR_PROMOTIONS:
      return null;
    default:
      return state;
  }
}
