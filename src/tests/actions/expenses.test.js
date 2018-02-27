import { createExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup add expense action object with data", () => {
    const expenseData = {
        description: "Food",
        amount: 3000,
        createdAt: 5000,
        note: "This week's groceries"
    };

    const action = createExpense(expenseData);

    const expected = {
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    };
    expect(action).toEqual(expected);
});

test("should setup add expense action object with no data", () => {
    const action = createExpense();

    const expected = {
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    };
    expect(action).toEqual(expected);
});

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "34ks34jsa" });

    const expected = {
        type: "REMOVE_EXPENSE",
        id: "34ks34jsa"
    };
    expect(action).toEqual(expected);
});

test("should setup edit expense action object", () => {
    const action = editExpense("593sdaw82b", { amount: 8 });

    const expected = {
        type: "EDIT_EXPENSE",
        id: "593sdaw82b",
        edited: {
            amount: 8
        }
    };
    expect(action).toEqual(expected);
});