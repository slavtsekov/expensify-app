import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const action = { type: "@@INIT" };

    const state = expensesReducer(undefined, action);

    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const expense = {
        id: "4",
        description: "Cinema",
        note: "",
        amount: 1000,
        createdAt: moment(0).add(24, "days").valueOf()  
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        edited: {
            amount: 295,
            note: "Expensive gum"
        }
    };

    const state = expensesReducer(expenses, action);

    const expected = {
        id: "1",
        description: "Gum",
        note: "Expensive gum",
        amount: 295,
        createdAt: 0
    };
    expect(state[0]).toEqual(expected);
});

test("should not edit an expense if not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "100",
        edited: {
            description: "Food",
            createdAt: moment(0).add(1, "days")
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    const expensesToSet = [expenses[1], expenses[2]];
    const action = {
        type: "SET_EXPENSES",
        expenses: expensesToSet
    };

    const state = expensesReducer([expenses[0]], action);

    expect(state).toEqual(expensesToSet);
});