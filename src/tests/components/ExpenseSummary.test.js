import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("should render ExpenseSummary with one expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={344} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={45} expensesTotal={56785} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with hidden expense", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={23} hiddenExpensesCount={1} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple hidden expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={23} hiddenExpensesCount={5} />);
    expect(wrapper).toMatchSnapshot();
});