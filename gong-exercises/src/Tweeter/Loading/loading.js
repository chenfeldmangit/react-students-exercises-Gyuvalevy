import React from "react";
import PropTypes from 'prop-types';

const Loading = ({show}) => {
    return (
        <>
            {show
            && (
                <div id="loadingCenter" className="center-wrapper">
                    <img src="https://i.gifer.com/4V0b.gif" alt="loading..."/>
                </div>
            )
            }
        </>
    );
};

export default Loading;

Loading.defaultProps = {
    show: false,
}

Loading.propTypes = {
    show: PropTypes.bool,
}