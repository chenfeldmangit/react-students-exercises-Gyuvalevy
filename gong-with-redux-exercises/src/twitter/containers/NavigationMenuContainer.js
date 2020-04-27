import {connect} from "react-redux";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import {logout} from "../actions/loginActions";
import {filterNotificationsForUser} from "../util";

const mapStateToProps = (state) => ({
    profile: state.currentUserDetails.currentUser,
    notificationsCount: filterNotificationsForUser(state.notifications, state.currentUserDetails.currentUser.id).length,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
