import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses.js";
import selectExpensesTotal from "../selectors/expenses-total.js";

export const ExpenseSummary = ({ expenseCount, expensesTotal, hiddenExpensesCount }) => {
    const visibleExpensesWord = expenseCount !== 1 ? "expenses" : "expense";
    const formattedExpensesTotal = numeral(expensesTotal / 100).format("$0,0.00");
    const hiddenExpensesWord = hiddenExpensesCount !== 1 ? "expenses" : "expense";
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {visibleExpensesWord} totalling <span>{formattedExpensesTotal}</span>.
                </h1>
                {hiddenExpensesCount > 0 && (
                    <h2 className="page-header__title subtitle">
                        Not showing <span>{hiddenExpensesCount}</span> {hiddenExpensesWord} because of filters.
                    </h2>
                )}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        hiddenExpensesCount: state.expenses.length - visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);