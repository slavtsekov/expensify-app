import { firebase, authProviders } from "../firebase/firebase";
import errorHandler from "../utils/errorHandler";

const login = (uid) => ({
    type: "LOGIN",
    uid
});

const startLogin = (method) => {
    return () => {
        const authProvider = authProviders[method];
        if (!authProvider) return;
        return firebase.auth().signInWithPopup(authProvider).catch(errorHandler);
    };
};

const logout = () => ({
    type: "LOGOUT"
});

const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export { startLogin, startLogout, login, logout };