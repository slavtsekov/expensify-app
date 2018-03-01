import moment from "moment";
import getVisibleExpenses from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("should fulter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };

    const results = getVisibleExpenses(expenses, filters);

    const expected = [expenses[2], expenses[1]];
    expect(results).toEqual(expected);
});

test("should filter by startDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    };

    const results = getVisibleExpenses(expenses, filters);

    const expected = [expenses[2], expenses[0]];
    expect(results).toEqual(expected);
});

test("should filter by endDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).subtract(1, "days")
    };

    const results = getVisibleExpenses(expenses, filters);

    expect(results).toEqual([expenses[1]]);
});

test("should sort by date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };

    const results = getVisibleExpenses(expenses, filters);

    const expected = [expenses[2], expenses[0], expenses[1]];
    expect(results).toEqual(expected);    
});

test("should sort by amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };

    const results = getVisibleExpenses(expenses, filters);

    const expected = [expenses[1], expenses[2], expenses[0]];
    expect(results).toEqual(expected);    
});