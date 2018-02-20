import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {

    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(updated) => { 
                    props.dispatch(editExpense(props.expense.id, updated)); 
                    
                }} 
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push("/");
            }}>Delete</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);