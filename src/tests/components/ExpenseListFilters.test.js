import React from "react";
import { shallow } from "enzyme";
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