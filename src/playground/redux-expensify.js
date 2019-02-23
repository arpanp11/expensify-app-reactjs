import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ACTION -- expenses
//ADD_EXPENSE
const addExpense = ({
  description = ' ',
  note = ' ',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//ACTION -- filter
//SET_TEXT_FILTER
const setTextFilter = (text = ' ') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

//REDUCER -- Expense reducer

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//REDUCER -- Filter reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//SELECTOR -- get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      //figure out if expense.decription as the text variable string inside of it
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//STORE -- store creation

const store = createStore(
  //register reducer in combine reducer function
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

//* this is not part of destrcuting the application
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  //console.log(store.getState();
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'COX', amount: 300, createdAt: -1000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: 'Payment', amount: 500, createdAt: 2000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(3000)); // endDate 1250

const demoState = {
  expenses: [
    {
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

//* until here , not part of destructuring
