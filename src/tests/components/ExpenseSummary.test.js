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