import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpenseMock, historyMock, wrapper;
beforeEach(() => {
    addExpenseMock = jest.fn();
    historyMock = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpenseMock} history={historyMock} />);
});

test("should render AddExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
    const expense = expenses[2];

    wrapper.find("ExpenseForm").prop("onSubmit")(expense);

    expect(addExpenseMock).toHaveBeenLastCalledWith(expense);
    expect(historyMock.push).toHaveBeenCalledWith("/");
});