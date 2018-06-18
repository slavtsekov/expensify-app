import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import getStore from "./store/configureStore";
import "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";
import configureAuthentication from "./firebase/configureAuthentication";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

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
ReactDOM.render(<LoadingPage />, document.getElementById("app"));
configureAuthentication(renderApp, store);

