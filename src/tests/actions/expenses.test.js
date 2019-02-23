import uuid from 'uuid';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({
    id: '123abc'
  });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('456xyz', { note: 'Pay gas bill' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '456xyz',
    updates: {
      note: 'Pay gas bill'
    }
  });
});

test('should setup add expense action object with provided value', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Last month rent',
    amount: 14500,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default value', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: ' ',
      note: ' ',
      amount: 0,
      createdAt: 0
    }
  });
});
