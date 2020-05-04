import {connect} from "react-redux";
import Login from "../../components/Login/Login";
import {signUp, tryLogin} from "../../actions/loginActions";

const mapStateToProps = (state) => ({
    error: state.currentUserDetails.error,
})

const mapDispatchToProps = (dispatch) => ({
    tryLogin: (username, password) => dispatch(tryLogin(username, password)),
    signUp: (username, password) => dispatch(signUp(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
