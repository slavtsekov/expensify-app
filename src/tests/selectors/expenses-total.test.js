import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
    const total = getExpensesTotal([]);

    expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
    const expense = expenses[0];

    const total = getExpensesTotal([expense]);

    expect(total).toBe(expense.amount);
});

test("should correctly add up multiple expenses", () => {
    const total = getExpensesTotal(expenses);

    expect(total).toBe(114195);
});