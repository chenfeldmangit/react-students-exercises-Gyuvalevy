import {connect} from "react-redux";
import ProfilePage from "../../components/CenterPage/Profile/ProfilePage";

const mapStateToProps = (state) => ({
    profile: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

