import uuid from "uuid";

const createExpense = ({ 
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt        
        }
    }
);

const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, edited) => ({
    type: "EDIT_EXPENSE",
    id,
    edited
});

export { createExpense, removeExpense, editExpense };