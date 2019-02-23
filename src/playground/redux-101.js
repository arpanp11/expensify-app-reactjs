import { createStore } from 'redux';

//Action generator -- functions that return action objects

//option 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

//option 2
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

//REDUCERS
//1. Reducers are pure function
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
  //   if (action.type === "INCREMENT") {
  //     return {
  //       count: state.count + 1
  //     };
  //   } else {
  //     return state;
  //   }
};

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
