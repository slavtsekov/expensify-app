import React from "react";
import { connect } from "react-redux";
import { startGoogleLogin, startFacebookLogin, startTwitterLogin, startGithubLogin } from "../actions/auth";
import InfoModal from "./InfoModal";

export class LoginPage extends React.Component {
    state = {
        error: undefined
    };
    startGoogleLogin = () => {
        this.props.startGoogleLogin().then(this.errorHandler);
    };
    startFacebookLogin = () => {
        this.props.startFacebookLogin().then(this.errorHandler);
    };
    startTwitterLogin = () => {
        this.props.startTwitterLogin().then(this.errorHandler);
    };
    startGithubLogin = () => {
        this.props.startGithubLogin().then(this.errorHandler);
    };
    errorHandler = (message) => {
        if (typeof message === "string") {
            this.setState(() => ({
                error: message
            }));
        }
    };
    clearError = () => {
        this.setState(() => ({
            error: undefined
        }));        
    };
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>
                    <p>It's time to get your expenses under control.</p>
                    <button 
                        className="button box-layout__option" 
                        onClick={this.startGoogleLogin}>
                        Login with Google
                    </button>
                    <button 
                        className="button box-layout__option" 
                        onClick={this.startFacebookLogin}>
                        Login with Facebook
                    </button>
                    <button 
                        className="button box-layout__option" 
                        onClick={this.startTwitterLogin}>
                        Login with Twitter
                    </button>
                    <button 
                        className="button box-layout__option" 
                        onClick={this.startGithubLogin}>
                        Login with GitHub
                    </button>
                </div>
                <InfoModal 
                    message={this.state.error} 
                    handleClose={this.clearError}
                />
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin()),
    startTwitterLogin: () => dispatch(startTwitterLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);