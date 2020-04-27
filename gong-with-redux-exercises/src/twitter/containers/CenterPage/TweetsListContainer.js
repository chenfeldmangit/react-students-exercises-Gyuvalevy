import {connect} from "react-redux";
import TweetsList from "../../components/CenterPage/NewsFeed/TweetsList";

const mapStateToProps = (state) => ({
    tweets: state.tweets,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);

