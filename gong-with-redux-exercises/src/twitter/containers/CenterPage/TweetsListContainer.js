import {connect} from "react-redux";
import TweetsList from "../../components/CenterPage/NewsFeed/TweetsList";

const mapStateToProps = (state) => ({
    tweets: state.tweets,
})

export default connect(mapStateToProps, null)(TweetsList);

