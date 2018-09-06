import { createStore, combineReducers } from "redux";
// Store creation
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filter";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
};
