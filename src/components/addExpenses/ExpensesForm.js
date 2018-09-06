import React from "react";
import moment from "moment";

import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: 0,
    createdAt: moment(),
    calenderFocused: false
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  onDateChange = createdAt => {
    this.setState(() => ({
      createdAt
    }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calenderFocused: focused
    }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.onDescriptionChange}
            type="text"
            value={this.state.description}
            placeholder="Description"
            autoFocus
          />
          <input
            type="number"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount"
          />

          <textarea
            type="text"
            placeholder="Add a notefor your exppense (optional)"
          />
          <button>Add Expenses.</button>
        </form>
      </div>
    );
  }
}
