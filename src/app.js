import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import getStore from "./store/configureStore";
import { createExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = getStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(template, document.getElementById("app"));