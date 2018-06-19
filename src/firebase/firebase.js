import * as firebase from "firebase";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const authProviders = {
    google: new firebase.auth.GoogleAuthProvider(),
    facebook: new firebase.auth.FacebookAuthProvider(),
    twitter: new firebase.auth.TwitterAuthProvider(),
    github: new firebase.auth.GithubAuthProvider()
};

const getProviderNameForProviderId = (value) => {
    switch(value) {
        case authProviders.google.providerId:
            return "Google";
        case authProviders.facebook.providerId:
            return "Facebook";
        case authProviders.twitter.providerId:
            return "Twitter";
        case authProviders.github.providerId:
            return "Github";
        default:
            return "Unsupported";
    }
};

const configureAuthentication = (startLogin, startLogout) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            startLogin(user);
        } else {
            startLogout();
        }
    });
};

export { firebase, authProviders, getProviderNameForProviderId, configureAuthentication, database as default };