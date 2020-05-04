import {connect} from "react-redux";
import ErrorPopup from "../components/ErrorPopup";
import {closeErrorPopup} from "../actions/errorPopupActions";

const mapStateToProps = (state) => ({
    show: state.error.showError,
    message: state.error.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    ok: () => dispatch(closeErrorPopup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup)