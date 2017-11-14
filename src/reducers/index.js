import { combineReducers } from 'redux';
import login from './loginReducer';
import form from './formReducer';


const rootReducer = combineReducers({
  login,
  form
})

export default rootReducer;
