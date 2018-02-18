import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import getStore from "./store/configureStore";
import { createExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";


const store = getStore();

const expenseOne = store.dispatch(createExpense({ description: "Water bill", amount: 1700, createdAt: 31232123 }));
const expenseTwo = store.dispatch(createExpense({ description: "Gas bill", amount: 2000, createdAt: 78763245 }));
const expenseThree = store.dispatch(createExpense({ description: "Rent", amount: 20000, createdAt: 56947321 }));
store.dispatch(setTextFilter("bill"));

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));