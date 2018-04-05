import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
    const { id, description, amount, createdAt } = props.data;
    return (
        <div>
            <Link to={`/edit/${id}`}>{description}</Link>
            - 
            {numeral(amount/100).format("$0,0.00")} 
            - 
            {moment(createdAt).format("MMMM Do, YYYY")}
        </div>
    );
};

export default ExpenseListItem;