import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let startAddExpenseMock, historyMock, wrapper;
beforeEach(() => {
    startAddExpenseMock = jest.fn();
    historyMock = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpenseMock} history={historyMock} />);
});

test("should render AddExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
    const expense = expenses[2];

    wrapper.find("ExpenseForm").prop("onSubmit")(expense);

    expect(startAddExpenseMock).toHaveBeenLastCalledWith(expense);
    expect(historyMock.push).toHaveBeenCalledWith("/");
});