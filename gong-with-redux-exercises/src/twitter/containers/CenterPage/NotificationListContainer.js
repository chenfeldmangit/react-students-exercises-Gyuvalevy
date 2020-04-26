import {connect} from "react-redux";
import NotificationList from "./../../components/CenterPage/Notification/NotificationList";

const mapStateToProps = (state) => ({
    tweets: state.tweets,
    notifications: state.notifications,
    profiles: state.profiles,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);

