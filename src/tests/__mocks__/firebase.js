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

const auth = {
    GoogleAuthProvider: () => {},
    FacebookAuthProvider: () => {},
    TwitterAuthProvider: () => {},
    GithubAuthProvider: () => {}
};

export { initializeApp, database, auth };