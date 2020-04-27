import {connect} from "react-redux";
import {addTweet} from "../../actions/tweetsActions";
import AddTweet from "../../components/CenterPage/NewsFeed/AddTweet";

const mapDispatchToProps = (dispatch) => ({
    sendTweet: (content) =>  dispatch(addTweet(content)),
})

export default connect(null, mapDispatchToProps)(AddTweet);

