import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { defaultFilters, filters } from "../fixtures/filters";

let setTextFilterMock, 
    sortByDateMock, 
    sortByAmountMock, 
    setStartDateMock, 
    setEndDateMock, 
    wrapper;

beforeEach(() => {
    setTextFilterMock = jest.fn(); 
    sortByDateMock = jest.fn(); 
    sortByAmountMock = jest.fn(); 
    setStartDateMock = jest.fn(); 
    setEndDateMock = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={defaultFilters}
            setTextFilter={setTextFilterMock} 
            sortByDate={sortByDateMock} 
            sortByAmount={sortByAmountMock} 
            setStartDate={setStartDateMock} 
            setEndDate={setEndDateMock} 
        />
    );
});

test("should render ExpenseListFilters with default filters", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with custom filters", () => {
    wrapper.setProps({
        filters
    });

    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const text = "rent";

    wrapper.find("input").simulate("change", {
        target: {
            value: text
        }
    });

    expect(setTextFilterMock).toHaveBeenLastCalledWith(text);
});

test("should sort by amount", () => {
    wrapper.find("select").simulate("change", {
        target: {
            value: "amount"
        }
    });

    expect(sortByAmountMock).toHaveBeenCalled();
});

test("should sort by date", () => {
    wrapper.setProps({
        filters
    });

    wrapper.find("select").simulate("change", {
        target: {
            value: "date"
        }
    });

    expect(sortByDateMock).toHaveBeenCalled();
});

test("should handle date changes", () => {
    const startDate = moment().add(1, "days");
    const endDate = moment().add(3, "days");

    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });

    expect(setStartDateMock).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateMock).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
    const input = "startDate";

    wrapper.find("DateRangePicker").prop("onFocusChange")(input);

    expect(wrapper.state("focusedDateInput")).toBe(input);
});