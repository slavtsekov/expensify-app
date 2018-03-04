import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with edit data correctly", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });

    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    });

    expect(wrapper.state("description")).toBe(value);
});

test("should set note on textarea change", () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("textarea").simulate("change", {
        target: { value }
    });

    expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valud input", () => {
    const value = "22.50";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });

    expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalud input", () => {
    const value = "22.501";
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });

    expect(wrapper.state("amount")).toBe("");
});

test("should send data for valid form submission", () => {
    const onSumbitSpy = jest.fn();
    const expenseData = expenses[2];
    const wrapper = shallow(<ExpenseForm onSubmit={onSumbitSpy} expense={expenseData} />);

    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });

    expect(onSumbitSpy).toHaveBeenLastCalledWith({
        description: expenseData.description,
        amount: expenseData.amount,
        createdAt: expenseData.createdAt,
        note: expenseData.note
    });
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("SingleDatePicker").prop("onDateChange")(now);

    expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set calendar focus on change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });

    expect(wrapper.state("calendarFocused")).toBe(focused);
});