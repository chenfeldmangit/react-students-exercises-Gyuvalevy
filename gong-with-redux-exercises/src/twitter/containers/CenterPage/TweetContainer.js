import {connect} from "react-redux";
import {commentTweet, likeTweet, removeTweet, retweetTweet} from "../../actions/tweetsActions";
import Tweet from "../../components/CenterPage/NewsFeed/Tweet";

const mapStateToProps = (state, ownProps) => ({
    profile: state.profiles.find(value => value.id === ownProps.tweet.profileId)
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (tweet) => dispatch(likeTweet(tweet)),
    addComment: (tweet) => dispatch(commentTweet(tweet)),
    addRetweet: (tweet) => dispatch(retweetTweet(tweet)),
    deleteTweet: (tweet) => dispatch(removeTweet(tweet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);

