import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    const authConditionComponent = (props) => {
        const template = isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        );
        return template;
    };

    return (
        <Route {...rest} component={authConditionComponent} />
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const PrivateRouteWithStore = connect(mapStateToProps)(PrivateRoute);

export { PrivateRoute, PrivateRouteWithStore as default };