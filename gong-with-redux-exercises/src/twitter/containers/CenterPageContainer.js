import {connect} from "react-redux";
import CenterPage from "../components/CenterPage/CenterPage";
import {setLoading} from "../actions/loadingActions";

const mapStateToProps = (state) => ({
    show: !state.showLoading,
})

const mapDispatchToProps = (dispatch) => ({
    finishedLoading: () => dispatch(setLoading(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CenterPage)