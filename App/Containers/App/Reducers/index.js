import { combineReducers } from 'redux';
import ExampleReducer from './ExampleReducer';

// declare all reducers here
export default combineReducers({
    example: ExampleReducer,
});
