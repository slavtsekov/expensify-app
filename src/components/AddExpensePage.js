import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { createExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (data) => {
        this.props.onSubmit(data);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>            
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (data) => { dispatch(createExpense(data)); }
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);