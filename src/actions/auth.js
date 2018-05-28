import { firebase, googleAuthProvider, facebookAuthProvider } from "../firebase/firebase";

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

const logout = () => ({
    type: "LOGOUT"
});

const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

export { startGoogleLogin, startFacebookLogin, startLogout, login, logout };