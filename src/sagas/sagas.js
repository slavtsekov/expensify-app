import { takeLatest, call, put, select } from "redux-saga/effects";
import getUID from "../selectors/auth";
import { addExpense, editExpense, removeExpense, setExpenses } from "../actions/expenses";
import { add as addToDb, edit as editInDb, remove as removeFromDb, get as getFromDb } from "../data/data";

export function* watcherSaga() {
    yield [
        takeLatest("START_ADD_EXPENSE", addExpenseSaga, getUID, addToDb),
        takeLatest("START_EDIT_EXPENSE", editExpenseSaga, getUID, editInDb),
        takeLatest("START_REMOVE_EXPENSE", removeExpenseSaga, getUID, removeFromDb),
        takeLatest("START_SET_EXPENSES", setExpensesSaga, getUID, getFromDb)
    ];
}

export function* addExpenseSaga(getUID, addToDb, action) {
    const uid = yield select(getUID);
    const expense = action.expense;
    const response = yield call(addToDb, uid, expense);
    yield put(addExpense({
        id: response.ref.key,
        ...expense
    }));
}

export function* editExpenseSaga(getUID, editInDb, action) {
    const uid = yield select(getUID);
    const { id, edited } = action;
    yield call(editInDb, uid, id, edited);
    yield put(editExpense(id, edited));
}

export function* removeExpenseSaga(getUID, removeFromDb, action) {
    const uid = yield select(getUID);
    const id = action.id;
    yield call(removeFromDb, uid, id);
    yield put(removeExpense({ id }));
}

export function* setExpensesSaga(getUID, getFromDb, action) {
    const uid = yield select(getUID);
    const snapshot = yield call(getFromDb, uid);
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    yield put(setExpenses(expenses));
    action.success();
}