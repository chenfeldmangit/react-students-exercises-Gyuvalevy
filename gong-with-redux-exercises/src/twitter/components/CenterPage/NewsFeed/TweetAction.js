import React from "react";
import PropTypes from 'prop-types';

const TweetAction = ({content, divClassName, onClick, iconClass}) => {
    return (
        <div className={`action ${divClassName}`} onClick={onClick}>
            <i className={`small-icon icon-space-pad icon-hover ${iconClass}`}/>
            <span>{content}</span>
        </div>
    );
};

TweetAction.defaultProps = {
    content: '',
    divClassName: '',
    onClick: () => {},
};

TweetAction.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    divClassName: PropTypes.string,
    iconClass: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default TweetAction;
