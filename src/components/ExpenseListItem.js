import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = (props) => {
    const { id, description, amount, createdAt } = props.data;
    return (
        <div>
            {description} - {amount} - {createdAt}
            <button onClick={() => {
                props.dispatch(removeExpense({ id }));
            }}>Delete</button>
        </div>
    );
};

export default connect()(ExpenseListItem);