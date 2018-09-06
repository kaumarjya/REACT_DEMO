import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filter";
const ExpenseListFilter = props => (
  <div>
    <input
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
        console.log(e.target.value);
      }}
      type="text"
      value={props.filters.text}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        e.target.value == "date"
          ? props.dispatch(sortByDate(e.target.value))
          : props.dispatch(sortByAmount(e.target.value));

        console.log(e.target.value);
      }}
    >
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>
  </div>
);

const mapStatetoProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStatetoProps)(ExpenseListFilter);
