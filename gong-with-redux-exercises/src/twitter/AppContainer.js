import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
    isLoggedIn: !!state.currentUserDetails.currentUser,
})

export default connect(mapStateToProps, null)(App);
