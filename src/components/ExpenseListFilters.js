import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component {
    state = {
        focusedDateInput: null
    };
    changeTextFilter = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    changeSortBy = (e) => {
        if (e.target.value === "amount") {
            this.props.sortByAmount();
        } else {
            this.props.sortByDate();
        }
    };
    changeDateFilter = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    changeFocusedDateInput = (focusedDateInput) => {
        this.setState({ focusedDateInput })
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text" 
                            value={this.props.filters.text}
                            onChange={this.changeTextFilter} 
                        />                    
                    </div>
                    <div className="input-group__item">
                        <select
                            value={this.props.filters.sortBy}
                            onChange={this.changeSortBy}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div>
        );  
    }  
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (value) => { dispatch(setTextFilter(value)); },
    sortByAmount: () => { dispatch(sortByAmount()); },
    sortByDate: () => { dispatch(sortByDate()); },
    setStartDate: (startDate) => { dispatch(setStartDate(startDate)); },
    setEndDate: (endDate) => { dispatch(setEndDate(endDate)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);