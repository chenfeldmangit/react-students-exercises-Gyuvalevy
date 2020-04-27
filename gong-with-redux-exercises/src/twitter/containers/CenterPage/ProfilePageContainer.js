import {connect} from "react-redux";
import ProfilePage from "../../components/CenterPage/Profile/ProfilePage";

const mapStateToProps = (state) => ({
    profile: state.currentUserDetails.currentUser,
})

export default connect(mapStateToProps, null)(ProfilePage);

