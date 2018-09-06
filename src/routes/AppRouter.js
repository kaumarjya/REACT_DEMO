import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/header/HeaderComponent";
import ExpenseDash from "../components/dashboard/DashBoardComponent";
import AddExpenses from "../components/addExpenses/AddExpenses";
import EditExpenses from "../components/editExpenses/EditExpenses";
import HelpExpenses from "../components/helpExpenses/HelpExpenses";
import NotFound from "../components/notFound/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDash} />
        <Route path="/add" component={AddExpenses} />
        <Route path="/edit/:id" component={EditExpenses} />
        <Route path="/help" component={HelpExpenses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
