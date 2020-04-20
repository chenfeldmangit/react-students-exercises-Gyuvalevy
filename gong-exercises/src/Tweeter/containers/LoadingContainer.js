import React from "react";
import {connect} from "react-redux";
import Loading from "../components/Loading/Loading";

const mapStateToProps = (state) => ({
    show: state.showLoading,
})

export default connect(mapStateToProps, null)(Loading)