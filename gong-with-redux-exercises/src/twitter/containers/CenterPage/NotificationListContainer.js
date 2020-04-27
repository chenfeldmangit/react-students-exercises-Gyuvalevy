import {connect} from "react-redux";
import NotificationList from "./../../components/CenterPage/Notification/NotificationList";
import {filterNotificationsForUser} from "../../util";

const mapStateToProps = (state) => ({
    notifications:  filterNotificationsForUser(state.notifications, state.currentUserDetails.currentUser.id),
})

export default connect(mapStateToProps, null)(NotificationList);

