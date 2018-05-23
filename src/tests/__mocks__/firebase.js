const initializeApp = () => {};
const database = () => ({
    ref: (path) => ({
        push: (data) => ({
            ref: {
                key: "testkey"
            }
        }),
        update: (edited) => {
            return new Promise(function(resolve, reject) {
                resolve();
            });
        }
    })
});

const auth = {
    GoogleAuthProvider: () => {}
};

export { initializeApp, database, auth };