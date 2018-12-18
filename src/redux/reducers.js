import { combineReducers } from 'redux';
import boot from '../modules/boot/reducer';
import example from '../modules/example/reducer';

export default combineReducers({
  boot,
  example
});
