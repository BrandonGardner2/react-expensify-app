//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({
    description: 'water bill',
    amount: 4500
}));

// addExpense -> Gas bill
store.dispatch(addExpense({
    description: 'gas bill',
    amount: 1500,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'rent',
    amount: 109500,
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
