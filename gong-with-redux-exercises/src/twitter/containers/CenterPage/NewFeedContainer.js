import {connect} from "react-redux";
import NewsFeed from "../../components/CenterPage/NewsFeed/NewsFeed";
import {appendTweet, removeTweet, replaceTweet} from "../../actions/tweetsActions";

const mapStateToProps = (state) => ({
    tweets: state.tweets,
    notifications: state.notifications,
    profiles: state.profiles,
    currentUser: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    sendTweet: (tweet) => dispatch(appendTweet(tweet)),
    replaceTweet: (tweet) => dispatch(replaceTweet(tweet)),
    deleteTweet: (tweet) => dispatch(removeTweet(tweet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

