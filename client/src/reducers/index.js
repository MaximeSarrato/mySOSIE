import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import promotionsReducer from './promotionsReducer';
import studentsReducer from './studentsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  promotions: promotionsReducer,
  students: studentsReducer
});

export default rootReducer;
