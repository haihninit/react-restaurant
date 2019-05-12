import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import menuReducer from './menuReducer';

export default combineReducers({
    error: errorReducer,
    menu: menuReducer
});