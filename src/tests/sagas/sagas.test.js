import { takeLatest, call, put, select } from "redux-saga/effects";
import { addExpenseSaga, editExpenseSaga, removeExpenseSaga, setExpensesSaga } from "../../sagas/sagas";
import expenses from "../fixtures/expenses";
import { addExpense, requestAddExpense, editExpense, requestEditExpense, removeExpense, requestRemoveExpense, setExpenses, requestSetExpenses } from "../../actions/expenses";

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
    const action = requestAddExpense(expenses[1]);
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
    const action = requestEditExpense(expenseID, edited);
    const saga = editExpenseSaga(getUIDMock, editInDbMock, action);

    const selectResult = saga.next().value;
    const callResult = saga.next(uID).value;
    const putResult = saga.next().value;

    expect(selectResult).toEqual(select(getUIDMock));
    expect(callResult).toEqual(call(editInDbMock, uID, expenseID, edited));
    expect(putResult).toEqual(put(editExpense(expenseID, edited)));
});

test("should execute effects for removing expense correctly", () => {
    const uID = "testuserid123";
    const expenseID = "testexpenseid123";
    const getUIDMock = () => {};
    const removeFromDbMock = () => {};
    const action = requestRemoveExpense({ id: expenseID });
    const saga = removeExpenseSaga(getUIDMock, removeFromDbMock, action);

    const selectResult = saga.next().value;
    const callResult = saga.next(uID).value;
    const putResult = saga.next().value;

    expect(selectResult).toEqual(select(getUIDMock));
    expect(callResult).toEqual(call(removeFromDbMock, uID, expenseID));
    expect(putResult).toEqual(put(removeExpense({ id: expenseID })));
});

test("should execute effects for retrieving expenses correctly", () => {
    const uID = "testuserid123";
    const expenseID = "testexpenseid123";
    const snapshot = [{
        key: expenseID,
        val: () => expenses[2]
    }];
    const getUIDMock = () => {};
    const getFromDbMock = () => {};
    const onSuccessSpy = jest.fn();
    const action = requestSetExpenses(onSuccessSpy);
    const saga = setExpensesSaga(getUIDMock, getFromDbMock, action);

    const selectResult = saga.next().value;
    const callResult = saga.next(uID).value;
    const putResult = saga.next(snapshot).value;

    expect(selectResult).toEqual(select(getUIDMock));
    expect(callResult).toEqual(call(getFromDbMock, uID));
    expect(putResult).toEqual(put(setExpenses([{
        id: expenseID,
        ...expenses[2]
    }])));
});
