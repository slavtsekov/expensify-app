import { takeLatest, call, put, select } from "redux-saga/effects";
import { addExpenseSaga, editExpenseSaga } from "../../sagas/sagas";
import expenses from "../fixtures/expenses";
import { addExpense, startAddExpense2, editExpense, startEditExpense2 } from "../../actions/expenses";

test("should execute effects for adding expense correctly", () => {
    const uID = "testuserid123";
    const expenseID = "testexpenseid123";
    const addToDbResult = { 
        ref: { 
            key: expenseID 
        }
    };
    const addToDbMock = () => {};
    const getUIDMock = () => {};
    const { description, note, amount, createdAt } = expenses[1];
    const action = startAddExpense2(expenses[1]);
    const expenseData = action.expense;
    const saga = addExpenseSaga(getUIDMock, addToDbMock, action);

    const selectResult = saga.next().value;
    const callResult = saga.next(uID).value;
    const putResult = saga.next(addToDbResult).value;

    expect(selectResult).toEqual(select(getUIDMock));
    expect(callResult).toEqual(call(addToDbMock, uID, expenseData));
    expect(putResult).toEqual(put(addExpense({
        id: expenseID,
        ...expenseData
    })));
});

test("should execute effects for editing expense correctly", () => {
    const uID = "testuserid123";
    const getUIDMock = () => {};
    const editInDbMock = () => {};
    const expenseID = "testexpenseid123";
    const edited = expenses[0];
    const action = startEditExpense2(expenseID, edited);
    const saga = editExpenseSaga(getUIDMock, editInDbMock, action);

    const selectResult = saga.next().value;
    const callResult = saga.next(uID).value;
    const putResult = saga.next().value;

    expect(selectResult).toEqual(select(getUIDMock));
    expect(callResult).toEqual(call(editInDbMock, uID, expenseID, edited));
    expect(putResult).toEqual(put(editExpense(expenseID, edited)));
});
