import { firebase, authProviders, getProviderNameForProviderId } from "../firebase/firebase";

const login = (uid) => ({
    type: "LOGIN",
    uid
});

const errorHandler = (error) => {
    if (error.code === "auth/account-exists-with-different-credential") {
        var pendingCred = error.credential;
        var email = error.email;
        return firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
            var provider = getProviderNameForProviderId(methods[0]);
            return `This provider's email is already used by your ${provider} account.`;
        });
    } else {
        return error.message;
    }
};

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