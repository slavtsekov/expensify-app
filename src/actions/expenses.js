import database from "../firebase/firebase";

const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

const requestAddExpense = (expenseData = {}) => {
    const { 
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return {
        type: "REQUEST_ADD_EXPENSE",
        expense
    };
};

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const requestRemoveExpense = ({ id }) => ({
    type: "REQUEST_REMOVE_EXPENSE",
    id 
});

const editExpense = (id, edited) => ({
    type: "EDIT_EXPENSE",
    id,
    edited
});

const requestEditExpense = (id, edited) => ({
    type: "REQUEST_EDIT_EXPENSE",
    id,
    edited
});

const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

const requestSetExpenses = (success) => ({
    type: "REQUEST_SET_EXPENSES",
    success
});

export { 
    addExpense, 
    requestAddExpense,
    removeExpense,
    requestRemoveExpense,
    editExpense,
    requestEditExpense,
    setExpenses,
    requestSetExpenses
};