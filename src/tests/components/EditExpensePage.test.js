import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editedExpense, 
    editExpenseSpy, 
    removeExpenseSpy, 
    historyMock, 
    wrapper;

beforeEach(() => {
    editedExpense = expenses[1];
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historyMock = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={editedExpense} editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historyMock} />);
});

test("should render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle expense edit", () => {
    const updated = { ...editedExpense, amount: 108500 };
    wrapper.find("ExpenseForm").prop("onSubmit")(updated);

    expect(historyMock.push).toHaveBeenLastCalledWith("/");
    expect(editExpenseSpy).toHaveBeenLastCalledWith(editedExpense.id, updated);
});

test("should handle expense delete", () => {
    wrapper.find("button").simulate("click");

    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: editedExpense.id });
    expect(historyMock.push).toHaveBeenLastCalledWith("/");
});