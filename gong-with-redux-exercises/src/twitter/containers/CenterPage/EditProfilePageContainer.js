import {connect} from "react-redux";
import EditProfilePage from "../../components/CenterPage/Profile/EditProfilePage";
import {updateProfile} from "../../actions/loginActions";

const mapStateToProps = (state) => ({
    profile: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    save: (profile) => dispatch(updateProfile(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);

