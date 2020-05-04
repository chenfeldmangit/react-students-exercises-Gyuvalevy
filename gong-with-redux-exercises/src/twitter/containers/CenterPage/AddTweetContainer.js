import {connect} from "react-redux";
import {addTweet} from "../../actions/tweetsActions";
import AddTweet from "../../components/CenterPage/NewsFeed/AddTweet";

const mapStateToProps = (state) => ({
    show: !!state.currentUserDetails.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    sendTweet: (content) =>  dispatch(addTweet(content)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTweet);

