import { takeLatest, call, put, select } from "redux-saga/effects";
import getUID from "../selectors/auth";
import { addExpense, editExpense } from "../actions/expenses";
import { add as addToDb, edit as editInDb } from "../data/data";

export function* watcherSaga() {
    yield [
        takeLatest("START_ADD_EXPENSE", addExpenseSaga, getUID, addToDb),
        takeLatest("START_EDIT_EXPENSE", editExpenseSaga, getUID, editInDb),
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