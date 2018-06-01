import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider } from "../firebase/firebase";

const login = (uid) => ({
    type: "LOGIN",
    uid
});

const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

const startTwitterLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    };
};

const startGithubLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
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