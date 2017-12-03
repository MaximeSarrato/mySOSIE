import axios from 'axios';

import {
  CREATE_USER,
  CREATE_USER_FAILED,
  FETCH_USER,
  FETCH_USER_FAILED,
  CREATE_STUDENT,
  CREATE_PROMOTION,
  FETCH_PROMOTIONS,
  GET_STUDENTS_FROM_PROMO,
  CLEAR_STUDENTS,
  CLEAR_PROMOTIONS
} from './types';

export const createUser = (values, history) => async dispatch => {
  const request = await axios.post('/api/create_user', values);
  if (request.data.error) {
    dispatch({ type: CREATE_USER_FAILED, payload: request });
  } else {
    history.push('/');
    dispatch({ type: CREATE_USER, payload: request });
  }
};

export const loginUser = (values, history) => async dispatch => {
  const request = await axios.post('/api/login', values);
  if (request.data.error) {
    dispatch({ type: FETCH_USER_FAILED, payload: request.data.error });
  } else {
    history.push('/');
    dispatch({ type: FETCH_USER, payload: request.data });
  }
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const createStudent = (values, history) => async dispatch => {
  const request = await axios.post('/api/create_student', values);
  history.push('/');
  dispatch({ type: CREATE_STUDENT, payload: request.data });
};

export const createPromotion = (values, history) => async dispatch => {
  const request = await axios.post('/api/create_promotion', values);
  history.push('/');
  dispatch({ type: CREATE_PROMOTION, payload: request.data });
};

export const fetchPromotions = finishingYear => async dispatch => {
  const res = await axios.get(`/api/fetch_promotions/${finishingYear}`);

  dispatch({ type: FETCH_PROMOTIONS, payload: res.data });
};

export const getStudentsFromPromotion = promotionID => async dispatch => {
  const res = await axios.get(`/api/promotions/${promotionID}`);
  dispatch({ type: GET_STUDENTS_FROM_PROMO, payload: res.data });
};

export function clearStudents() {
  return {
    type: CLEAR_STUDENTS
  };
}

export function clearPromotions() {
  return {
    type: CLEAR_PROMOTIONS
  };
}
