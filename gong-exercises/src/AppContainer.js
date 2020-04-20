import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {setLoading} from "./Tweeter/actions/loadingActions";
import {updateProfile} from "./Tweeter/actions/loginActions";

const mapDispatchToProps = (dispatch) => ({
    updateCurrentUserProfile: (profile) => dispatch(updateProfile(profile)),
    setShowLoading: (isLoading) => dispatch(setLoading(isLoading)),
})

const mapStateToProps = (state) => ({
    currentProfile: state.currentUserDetails.currentUser,
    showLoading: state.showLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
