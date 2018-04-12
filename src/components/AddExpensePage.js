import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (data) => {
        this.props.startAddExpense(data);
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
    startAddExpense: (data) => { dispatch(startAddExpense(data)); }
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);