import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store creation
  const store = createStore(
    //register reducer in combine reducer function
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer
    }),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
