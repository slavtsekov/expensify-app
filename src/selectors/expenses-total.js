const getExpensesTotal = (expenses) => {
    const total = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);

    return total;
};

export { getExpensesTotal as default };