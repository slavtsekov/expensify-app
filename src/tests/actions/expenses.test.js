import { 
    addExpense,
    editExpense,
    removeExpense, 
    setExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

test("should setup add expense action object with data", () => {
    const action = addExpense(expenses[2]);

    const expected = {
        type: "ADD_EXPENSE",
        expense: expenses[2]
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

test("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
});