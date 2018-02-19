import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { createExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(data) => {
                props.dispatch(createExpense(data));
                props.history.push("/");
            }}
        />
    </div>
);

export default connect()(AddExpensePage);