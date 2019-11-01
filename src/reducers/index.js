import todos from './todos';
import selectedFilter from './selectedFilter';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  selectedFilter
});


