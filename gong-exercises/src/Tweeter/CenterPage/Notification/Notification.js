import React from "react";
import PropTypes from 'prop-types';
import {NotificationActionAssets} from "../../Shapes/NotificationAction";
import {NotificationStructure} from "../../Shapes/NotificationStructure";
import {Profile} from "../../Shapes/Profile";

const Notification = ({notification, byProfile, content}) => {
    const notificationAsset = NotificationActionAssets[notification.action];

    return (
        <div className="notification-feed">
            <div>
                <i className={`small-icon ${notificationAsset.iconClass}`}/>
            </div>
            <div className="notification">
                <div className="pictures">
                    <img className="profile-picture" src={byProfile.imgSrc} alt="notification-type"/>
                    <img className="profile-picture" src={byProfile.imgSrc} alt="notification-type"/>
                </div>
                <div className="text">
                    {notificationAsset.renderText(byProfile.name)}
                </div>
                {
                    content
                    && (<div className="content">
                            <span>{content}</span>
                        </div>)
                }
            </div>
        </div>
    );
};

Notification.propTypes = {
    notification: NotificationStructure.isRequired,
    byProfile: Profile.isRequired,
    content: PropTypes.string,
}

export default Notification;
