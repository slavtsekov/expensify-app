import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    const authConditionComponent = (props) => isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />;
    return <Route {...rest} component={authConditionComponent} />
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

const PublicRouteWithStore = connect(mapStateToProps)(PublicRoute);

export { PublicRoute, PublicRouteWithStore as default };