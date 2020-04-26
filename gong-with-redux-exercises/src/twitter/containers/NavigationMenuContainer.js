import {connect} from "react-redux";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import {logout} from "../actions/loginActions";

const mapStateToProps = (state) => ({
    profile: state.currentUserDetails.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
