import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import getStore from "./store/configureStore";
import { configureAuthentication } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";
import { login, logout } from "./actions/auth";
import { requestSetExpenses } from "./actions/expenses";
import { history } from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

const store = getStore();
let hasRendered = false;

const renderApp = () => {
    if (hasRendered) return;
    const template = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
    ReactDOM.render(template, document.getElementById("app"));
    hasRendered = true;
};
const startLogin = (user) => {
    store.dispatch(login(user.uid));
    store.dispatch(requestSetExpenses(() => {
        renderApp();
        if (history.location.pathname === "/") {
            history.push("/dashboard");
        }
    }));
};
const startLogout = () => {
    store.dispatch(logout());
    renderApp();
    history.push("/");
};

configureAuthentication(startLogin, startLogout);

