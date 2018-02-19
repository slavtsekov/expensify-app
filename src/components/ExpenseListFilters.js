import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = (props) => {
    const changeTextFilter = (e) => {
        props.dispatch(setTextFilter(e.target.value))
    };
    const changeSortBy = (e) => {
        const action = (e.target.value === "amount") ? sortByAmount : sortByDate;
        props.dispatch(action());
    }
    return (
        <div>
            <input 
                type="text" 
                value={props.filters.text}
                onChange={changeTextFilter} 
            />
            <select
                value={props.filters.sortBy}
                onChange={changeSortBy}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);