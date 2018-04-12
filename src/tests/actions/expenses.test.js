import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addExpense, startAddExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

test("should setup add expense action object with data", () => {
    const action = addExpense(expenses[2]);

    const expected = {
        type: "ADD_EXPENSE",
        expense: expenses[2]
    };
    expect(action).toEqual(expected);
});

test("should add expense to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "Keyboard",
        amount: 2500,
        note: "With huge discount",
        createdAt: 1111
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions()[0];
        expect(action).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${action.expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
    const defaultData = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const action = store.getActions()[0];
        expect(action).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });

        return database.ref(`expenses/${action.expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
})

// test("should setup add expense action object with no data", () => {
//     const action = createExpense();

//     const expected = {
//         type: "ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0
//         }
//     };
//     expect(action).toEqual(expected);
// });

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