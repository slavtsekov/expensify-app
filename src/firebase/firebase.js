import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAjke4AIfZoCbh98TVZWpQ2eEbbRXrJPhM",
    authDomain: "expensify-1200b.firebaseapp.com",
    databaseURL: "https://expensify-1200b.firebaseio.com",
    projectId: "expensify-1200b",
    storageBucket: "expensify-1200b.appspot.com",
    messagingSenderId: "212363020526"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: "Vault Dweller"
});