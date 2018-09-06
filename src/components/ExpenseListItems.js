import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <div>
      <p>Description : {description}</p>{" "}
      <p>
        Amout : {amount} - {createdAt}
      </p>{" "}
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

export default connect()(ExpenseListItem);
