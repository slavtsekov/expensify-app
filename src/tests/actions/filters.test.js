import moment from "moment";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";

test("should setup set text filter action object with data", () => {
    const action = setTextFilter("bill");

    const expected = {
        type: "SET_TEXT_FILTER",
        text: "bill"
    };
    expect(action).toEqual(expected);
});

test("should setup set text filter action object with no data", () => {
    const action = setTextFilter();

    const expected = {
        type: "SET_TEXT_FILTER",
        text: ""
    };
    expect(action).toEqual(expected);
});

test("should setup sory by amount filter action object", () => {
    const action = sortByAmount();

    expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should setup sory by date filter action object", () => {
    const action = sortByDate();

    expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("should setup set start date filter action object", () => {
    const action = setStartDate(moment(0));

    const expected = {
        type: "SET_START_DATE",
        date: moment(0)
    };
    expect(action).toEqual(expected);
});

test("should setup set end date filter action object", () => {
    const action = setEndDate(moment(0));

    const expected = {
        type: "SET_END_DATE",
        date: moment(0)
    };
    expect(action).toEqual(expected);
});