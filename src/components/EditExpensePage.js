import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    editExpense = (updated) => { 
        this.props.startEditExpense(this.props.expense.id, updated);
        this.props.history.push("/");
    };
    removeExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.editExpense} 
                />
                <button onClick={this.removeExpense}>Delete</button>
            </div>            
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updated) => { dispatch(startEditExpense(id, updated)); },
    startRemoveExpense: (data) => { dispatch(startRemoveExpense(data)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);