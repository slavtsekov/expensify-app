import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => (
    (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}></WrappedComponent> : <p>Please login.</p> }      
        </div>
    )
);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is the info." />, document.getElementById("app"));