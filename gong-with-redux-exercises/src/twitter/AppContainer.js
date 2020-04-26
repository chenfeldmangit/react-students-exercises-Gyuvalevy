import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
    currentProfile: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App);
