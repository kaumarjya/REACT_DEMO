import { createStore, combineReducers } from "redux";
const demoState = {
  expenses: [
    {
      id: "ddd",
      description: "Jan rent",
      note: "FInal Payment",
      amount: 100000,
      createAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
