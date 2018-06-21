import expenses from "../fixtures/expenses";

const initializeApp = () => {};
const database = () => ({
    ref: (path) => ({
        push: (data) => ({
            ref: {
                key: "testkey"
            }
        }),
        update: (edited) => {
            return new Promise(function(resolve) {
                resolve();
            });
        },
        remove: () => {
            return new Promise(function(resolve) {
                resolve();
            });           
        },
        once: (val) => {
            if (val === "value") {
                return new Promise(function(resolve) {
                    const response = {
                        val: () => ({
                            testkey1: expenses[0]
                        })
                    };
                    resolve(response);
                }); 
            }
        }
    })
});

const authResult = {
    stateChangedCallback: undefined,
    onAuthStateChanged: function(callback) {
        this.stateChangedCallback = callback;  
    },
    changeState: function(user) {
        this.stateChangedCallback(user);
    },
    fetchSignInMethodsForEmail: () => {
        return new Promise((resolve) => {
            const methods = ["google.com"];
            resolve(methods);
        });     
    }
};
const auth = () => (authResult);

auth.GoogleAuthProvider = () => ({
    providerId: "google.com"
});
auth.FacebookAuthProvider = () => {};
auth.TwitterAuthProvider = () => {};
auth.GithubAuthProvider = () => {};

export { initializeApp, database, auth };