import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length !== 0 ? (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} data={expense} />
                ))
            ) : (
                <p>No expenses</p>
            )
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);