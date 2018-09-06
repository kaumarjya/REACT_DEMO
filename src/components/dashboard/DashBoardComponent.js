import React from "react";
import ExpenseList from "../ExpensesList";
import ExpenseListFilter from "../ExpenseListFilter";
const ExpenseDash = () => (
  <div>
    <ExpenseListFilter /> <ExpenseList />
  </div>
);

export default ExpenseDash;
