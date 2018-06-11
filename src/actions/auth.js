import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider, getProviderNameForProviderId } from "../firebase/firebase";

const login = (uid) => ({
    type: "LOGIN",
    uid
});

const errorHandler = (error) => {
    if (error.code === "auth/account-exists-with-different-credential") {
        var pendingCred = error.credential;
        var email = error.email;
        return auth.fetchSignInMethodsForEmail(email).then((methods) => {
            var provider = getProviderNameForProviderId(methods[0]);
            return `This provider's email is already used by your ${provider} account.`;
        });
    } else {
        return error.message;
    }
};

const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).catch(errorHandler);
    };
};

const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider).catch(errorHandler);
    };
};

const startTwitterLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider).catch(errorHandler);
    };
};

const startGithubLogin = () => {
    return () => {
        const auth = firebase.auth();
        return auth.signInWithPopup(githubAuthProvider).catch(errorHandler);
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

export { startGoogleLogin, startFacebookLogin, startTwitterLogin, startGithubLogin, startLogout, login, logout };