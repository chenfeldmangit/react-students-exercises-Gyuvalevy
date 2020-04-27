import React from "react";
import PropTypes, {arrayOf} from 'prop-types';
import {NotificationActionAssets} from "../../../Shapes/NotificationAction";
import {NotificationStructure} from "../../../Shapes/NotificationStructure";
import {Profile} from "../../../Shapes/Profile";

const Notification = ({notification, byProfiles, content}) => {
    const notificationAsset = NotificationActionAssets[notification.action];

    const names = byProfiles.map((profile) => profile.name);

    return (
        <div className="notification-feed">
            <div>
                <i className={`small-icon ${notificationAsset.iconClass}`}/>
            </div>
            <div className="notification">
                <div className="pictures">
                    {
                        byProfiles.map(
                            (profile) =>
                                (<img className="profile-picture" src={profile.imgSrc} alt="notification-type" key={Math.floor(Math.random() * 100000)} />))
                    }
                </div>
                <div className="text">
                    {notificationAsset.renderText(names)}
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
    byProfiles: arrayOf(Profile.isRequired),
    content: PropTypes.string,
}

export default Notification;
