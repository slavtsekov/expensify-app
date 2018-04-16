import database from "../firebase/firebase";

const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { 
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const startRemoveExpense = ({ id }) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

const editExpense = (id, edited) => ({
    type: "EDIT_EXPENSE",
    id,
    edited
});

const startEditExpense = (id, edited) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(edited).then(() => {
            dispatch(editExpense(id, edited));
        });
    };
};

const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref("expenses").once("value").then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            dispatch(setExpenses(expenses));
        });
    };
};

export { 
    addExpense, 
    startAddExpense, 
    removeExpense,
    startRemoveExpense,
    editExpense,
    startEditExpense,
    setExpenses,
    startSetExpenses
};