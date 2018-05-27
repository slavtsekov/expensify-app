import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import getStore from "./store/configureStore";
import { requestSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = getStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(template, document.getElementById("app"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(requestSetExpenses(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push("/dashboard");
            }
        }));
    } else {
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});

