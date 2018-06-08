import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider, getProviderNameForProviderId } from "../firebase/firebase";

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
        const auth = firebase.auth();
        return auth.signInWithPopup(githubAuthProvider).catch((error) => {
            if (error.code === "auth/account-exists-with-different-credential") {
                var pendingCred = error.credential;
                var email = error.email;
                auth.fetchSignInMethodsForEmail(email).then((methods) => {
                    var provider = getProviderNameForProviderId(methods[0]);
                    console.log(`This provider's email is already used by your ${provider} account.`);
                });
            }
        });
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