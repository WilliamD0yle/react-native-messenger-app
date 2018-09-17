// Wherever you build your reducers
import AppNavigation from '../Navigation/AppNavigation'
import ExampleReducer from './ExampleReducer'

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
};

const rootReducer = combineReducers({
  nav: navReducer,
  exampleState: ExampleReducer,
});
