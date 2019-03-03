import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummry with single expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={345} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummry with multiple expenses', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={34} expensesTotal={143789245} />
  );
  expect(wrapper).toMatchSnapshot();
});
