import { firebase } from "./firebase";
import { login, logout } from "../actions/auth";
import { requestSetExpenses } from "../actions/expenses";
import { history } from "../routers/AppRouter";

const configureAuthentication = (renderApp, store) => {
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
};

export { configureAuthentication as default };