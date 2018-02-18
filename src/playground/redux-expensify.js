import { createStore, combineReducers } from "redux";
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

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter((expense) => expense.id !== action.id );
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.edited
                    };
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
});

const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };    
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date
            };                                     
        default:
            return state;
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return b.createdAt > a.createdAt ? 1 : -1;
        } else if (sortBy === "amount") {
            return b.amount > a.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const { expenses, filters } = store.getState();
    const visibleExpenses = getVisibleExpenses(expenses, filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(createExpense({ description: "Food", amount: 1000, createdAt: 1000 }));
const expenseTwo = store.dispatch(createExpense({ description: "Book", amount: 2000, createdAt: -1000 }));
const expenseThree = store.dispatch(createExpense({ description: "Game", amount: 3000, createdAt: 0 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1500 }));
// store.dispatch(setTextFilter("book"));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2225));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2250));

const demoState = {
    expenses: [
        {
            id: "sdasdde",
            description: "Game",
            note: "This was my game for the month",
            amount: 28,
            createdAt: 0
        }
    ],
    filters: {
        text: "game",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }
};