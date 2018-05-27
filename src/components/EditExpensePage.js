import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { requestEditExpense, requestRemoveExpense } from "../actions/expenses";

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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.editExpense} 
                    />
                    <button 
                        className="button button--secondary" 
                        onClick={this.removeExpense}>
                        Remove Expense
                    </button>
                </div>
            </div>            
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updated) => { dispatch(requestEditExpense(id, updated)); },
    startRemoveExpense: (data) => { dispatch(requestRemoveExpense(data)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);