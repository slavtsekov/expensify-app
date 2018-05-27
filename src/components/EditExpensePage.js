import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import DeleteModal from "./DeleteModal";
import { requestEditExpense, requestRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    state = {
        deletePending: false
    };
    editExpense = (updated) => { 
        this.props.startEditExpense(this.props.expense.id, updated);
        this.props.history.push("/");
    };
    triggerRemove = () => {
        this.setState(() => ({
            deletePending: true
        }));
    };
    removeExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push("/");
    };
    cancelRemove = () => {
        this.setState(() => ({
            deletePending: false
        }));       
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
                        onClick={this.triggerRemove}>
                        Remove Expense
                    </button>
                </div>
                <DeleteModal 
                    isOpen={this.state.deletePending} 
                    handleAccept={this.removeExpense}
                    handleDecline={this.cancelRemove}
                />
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