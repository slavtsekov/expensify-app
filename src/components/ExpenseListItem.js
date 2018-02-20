import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
    const { id, description, amount, createdAt } = props.data;
    return (
        <div>
            <Link to={`/edit/${id}`}>{description}</Link> - {amount} - {createdAt}
        </div>
    );
};

export default ExpenseListItem;