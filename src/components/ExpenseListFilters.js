import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilters extends React.Component {
    state = {
        focusedDateInput: null
    };
    changeTextFilter = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    };
    changeSortBy = (e) => {
        const action = (e.target.value === "amount") ? sortByAmount : sortByDate;
        this.props.dispatch(action());
    };
    changeDateFilter = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    changeFocusedDateInput = (focusedDateInput) => {
        this.setState({ focusedDateInput })
    };
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.changeTextFilter} 
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.changeSortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start_date_id"
                    endDate={this.props.filters.endDate}
                    endDateId="end_date_id"
                    onDatesChange={this.changeDateFilter}
                    focusedInput={this.state.focusedDateInput}
                    onFocusChange={this.changeFocusedDateInput}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );  
    }  
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);