import React from "react";
import PropTypes from "prop-types";
import {NotificationStructure} from "../../../Shapes/NotificationStructure";
import NotificationContainer from "../../../containers/CenterPage/NotificationContainer";
import '../../../../scss/twitter-notifications.scss';

const NotificationList = ({notifications}) => {
    return (
        <div className="notifications scroll">
            {
                notifications.map(notification =>
                    <NotificationContainer key={notification.key} notification={notification} />)
            }
        </div>
    );
};

NotificationList.propTypes = {
    notifications: PropTypes.arrayOf(NotificationStructure),
}

export default NotificationList;
