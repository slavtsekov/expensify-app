import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from "../firebase/firebase";

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

const logout = () => ({
    type: "LOGOUT"
});

const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export { startGoogleLogin, startFacebookLogin, startTwitterLogin, startLogout, login, logout };