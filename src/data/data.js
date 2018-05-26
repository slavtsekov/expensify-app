import database from "../firebase/firebase";

const add = (uid, expense) => {
    return database.ref(`users/${uid}/expenses`).push(expense);
};

const edit = (uid, expenseId, edited) => {
    return database.ref(`users/${uid}/expenses/${expenseId}`).update(edited);
};

const remove = (uid, expenseId) => {
    return database.ref(`users/${uid}/expenses/${expenseId}`).remove()
};

const get = (uid) => {
    return database.ref(`users/${uid}/expenses`).once("value");
};

export { add, edit, remove, get };