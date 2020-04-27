import {connect} from "react-redux";
import Notification from "./../../components/CenterPage/Notification/Notification";

const mapStateToProps = (state, ownProps) => ({
    tweets: state.tweets,
    notifications: state.notifications,
    profiles: state.profiles,
    byProfiles: ownProps.notification.byId.map((profileId) => state.profiles.find(value => value.id === profileId)),
    content: ownProps.notification.tweetId ? state.tweets.findIndex(value => value.key === ownProps.notification.tweetId).postContent : '',
})

export default connect(mapStateToProps, null)(Notification);

