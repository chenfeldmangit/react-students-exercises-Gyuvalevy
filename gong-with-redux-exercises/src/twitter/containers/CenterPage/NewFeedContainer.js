import {connect} from "react-redux";
import NewsFeed from "../../components/CenterPage/NewsFeed/NewsFeed";
import {addTweet} from "../../actions/tweetsActions";
import {addNotification} from "../../actions/notificationsActions";

const mapStateToProps = (state) => ({
    notifications: state.notifications,
    currentUser: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    sendTweet: (tweet, notification) => {
        dispatch(addTweet(tweet));
        dispatch(addNotification(notification))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

