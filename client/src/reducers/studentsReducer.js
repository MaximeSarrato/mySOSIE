import {
  CREATE_STUDENT,
  GET_STUDENTS_FROM_PROMO,
  CLEAR_STUDENTS
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case CREATE_STUDENT:
      return action.payload;
    case GET_STUDENTS_FROM_PROMO:
      return action.payload;
    case CLEAR_STUDENTS:
      return null;
    default:
      return state;
  }
}
