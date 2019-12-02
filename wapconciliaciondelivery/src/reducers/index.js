import { combineReducers } from 'redux';
import agredadoresReducer from './agregadoresReducer'
import userReducer from './userReducer'

export default combineReducers({
 agredadores: agredadoresReducer,
 user: userReducer
});