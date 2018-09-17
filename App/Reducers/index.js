import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import messages from './messages';

const rootReducer = combineReducers({
    user,
    contacts,
    messages
});

export default rootReducer;
