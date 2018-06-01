import React from "react";
import { connect } from "react-redux";
import { startGoogleLogin, startFacebookLogin, startTwitterLogin, startGithubLogin } from "../actions/auth";

export const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button 
                className="button" 
                onClick={props.startGoogleLogin}>
                Login with Google
            </button>
            <button 
                className="button" 
                onClick={props.startFacebookLogin}>
                Login with Facebook
            </button>
            <button 
                className="button" 
                onClick={props.startTwitterLogin}>
                Login with Twitter
            </button>
            <button 
                className="button" 
                onClick={props.startGithubLogin}>
                Login with GitHub
            </button>
        </div>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startTwitterLogin: () => dispatch(startTwitterLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);