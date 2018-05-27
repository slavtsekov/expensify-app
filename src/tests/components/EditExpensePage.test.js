import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editedExpense, 
    startEditExpenseSpy, 
    startRemoveExpenseSpy, 
    historyMock, 
    wrapper;

beforeEach(() => {
    editedExpense = expenses[1];
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historyMock = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={editedExpense} startEditExpense={startEditExpenseSpy} startRemoveExpense={startRemoveExpenseSpy} history={historyMock} />);
});

test("should render EditExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle expense edit", () => {
    const updated = { ...editedExpense, amount: 108500 };
    wrapper.find("ExpenseForm").prop("onSubmit")(updated);

    expect(historyMock.push).toHaveBeenLastCalledWith("/");
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(editedExpense.id, updated);
});

test("should trigger expense delete", () => {
    wrapper.find("button").simulate("click");

    expect(wrapper.state("deletePending")).toBe(true);
});

test("should handle expense delete", () => {
    wrapper.find("DeleteModal").prop("handleAccept")();

    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: editedExpense.id });
    expect(historyMock.push).toHaveBeenLastCalledWith("/");
});

test("should cancel expense delete", () => {
    wrapper.find("DeleteModal").prop("handleDecline")();

    expect(wrapper.state("deletePending")).toBe(false);
});