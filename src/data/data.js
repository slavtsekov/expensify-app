import database from "../firebase/firebase";

const add = (uid, expense) => {
    return database.ref(`users/${uid}/expenses`).push(expense);
};

const edit = (uid, expenseId, edited) => {
    return database.ref(`users/${uid}/expenses/${expenseId}`).update(edited);
};

const remove = (uid, expenseId) => {
    return database.ref(`users/${uid}/expenses/${expenseId}`).remove()
}

export { add, edit, remove };