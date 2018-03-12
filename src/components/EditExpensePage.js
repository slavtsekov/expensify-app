import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    editExpense = (updated) => { 
        this.props.editExpense(this.props.expense.id, updated);
        this.props.history.push("/");
    };
    removeExpense = () => {
        this.props.removeExpense({ id: this.props.expense.id });
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
    editExpense: (id, updated) => { dispatch(editExpense(id, updated)); },
    removeExpense: (data) => { dispatch(removeExpense(data)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);