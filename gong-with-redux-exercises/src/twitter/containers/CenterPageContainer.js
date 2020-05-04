import {connect} from "react-redux";
import CenterPage from "../components/CenterPage/CenterPage";

const mapStateToProps = (state) => ({
    show: !!state.currentUserDetails.currentUser,
    hasErrors: state.error.showError,
})

export default connect(mapStateToProps, null)(CenterPage)