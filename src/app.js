import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>This is my add expense component</div>
);

const EditExpensePage = () => (
    <div>
        This is my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        Page not found - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const router = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />  
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />  
                <Route component={NotFoundPage} />    
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById("app"));