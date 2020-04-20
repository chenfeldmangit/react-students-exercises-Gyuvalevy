import React from "react";
import {connect} from "react-redux";
import Login from "../../components/Login/Login";
import {loginProfile, loginFailed, signUp} from "../../actions/loginActions";

function LoginContainer(props) {

    const {loginProfile, loginFailed, signUp, error, profiles} = props;

    const tryLogin = (username, password) => {
        const loggedInProfile = profiles.find((profile) => (username === profile.username) && (password === profile.password));
        if (loggedInProfile) {
            loginProfile(loggedInProfile);
        } else {
            loginFailed('Error logging in');
        }
    };

    return (
        <Login tryLogin={tryLogin} signUp={signUp} error={error}/>
    )
}

const mapStateToProps = (state) => ({
    error: state.currentUserDetails.error,
})

const mapDispatchToProps = (dispatch) => ({
    loginProfile: (profile) => dispatch(loginProfile(profile)),
    loginFailed: (error) => dispatch(loginFailed(error)),
    signUp: (username, password) => dispatch(signUp(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
