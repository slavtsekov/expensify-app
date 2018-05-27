import database from "../firebase/firebase";

const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

const startAddExpense2 = (expenseData = {}) => {
    const { 
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return {
        type: "START_ADD_EXPENSE",
        expense
    };
};

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const startRemoveExpense2 = ({ id }) => ({
    type: "START_REMOVE_EXPENSE",
    id 
});

const editExpense = (id, edited) => ({
    type: "EDIT_EXPENSE",
    id,
    edited
});

const startEditExpense2 = (id, edited) => ({
    type: "START_EDIT_EXPENSE",
    id,
    edited
});

const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

const startSetExpenses2 = (success) => ({
    type: "START_SET_EXPENSES",
    success
});

export { 
    addExpense, 
    startAddExpense2,
    removeExpense,
    startRemoveExpense2,
    editExpense,
    startEditExpense2,
    setExpenses,
    startSetExpenses2
};