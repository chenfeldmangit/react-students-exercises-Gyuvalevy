import React from "react";
import PropTypes from 'prop-types';
import Button from "./Common/Button";

const ErrorPopup = ({show, message, ok}) => {
    return (
        <>
            {show
            && (
                <div id="loadingCenter" className="center-wrapper">
                    <h1>{message}</h1>
                    <Button onChangeFunc={ok} text="OK"/>
                </div>
            )
            }
        </>
    );
};

ErrorPopup.propTypes = {
    show: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
}

export default ErrorPopup;
