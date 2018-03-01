import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
    const action = { type: "@@INT" };

    const state = filtersReducer(undefined, action);

    const expected = {
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")        
    };
    expect(state).toEqual(expected);
});

test("should set sort by amount filter", () => {
    const action = { type: "SORT_BY_AMOUNT" };

    const state = filtersReducer(undefined, action);

    expect(state.sortBy).toEqual("amount");    
});

test("should set sort by date filter", () => {
    const action = { type: "SORT_BY_DATE" };
    const prevState = {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")        
    };

    const state = filtersReducer(prevState, action);

    expect(state.sortBy).toEqual("date");    
});

test("should set text filter", () => {
    const text = "bill";
    const action = { type: "SET_TEXT_FILTER", text };

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe(text);
});

test("should set start date filter", () => {
    const date = moment(0).subtract(19, "days");
    const action = { type: "SET_START_DATE", date };

    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(date);
});

test("should set end date filter", () => {
    const date = moment(0).add(2, "days");
    const action = { type: "SET_END_DATE", date };

    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(date);
});