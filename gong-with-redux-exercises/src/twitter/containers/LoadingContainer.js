import {connect} from "react-redux";
import Loading from "../components/Loading";

const mapStateToProps = (state) => ({
    show: state.showLoading,
})

export default connect(mapStateToProps, null)(Loading)