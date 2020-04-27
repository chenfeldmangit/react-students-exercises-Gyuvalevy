import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
    currentProfile: state.currentUserDetails.currentUser,
})

export default connect(mapStateToProps, null)(App);
