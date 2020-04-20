import React from "react";
import PropTypes from "prop-types";
import Notification from './Notification';
import {NotificationStructure} from "../../../Shapes/NotificationStructure";
import '../../../../scss/twitter-notifications.scss';

const NotificationList = ({notifications, getProfileInformation, getTweetContent}) => {
    let profiles = {};

    const getProfile = (profileId) => {
        if (!profiles[profileId])
            profiles[profileId] = getProfileInformation(profileId);
        return profiles[profileId];
    }

    const getProfiles = (profilesId) => {
        return profilesId.map((profileId) => getProfile(profileId));
    }

    return (
        <div className="notifications scroll">
            {
                notifications.map(notification =>
                    <Notification
                        key={notification.key}
                        notification={notification}
                        byProfiles={getProfiles(notification.byId)}
                        content={notification.tweetId ? getTweetContent(notification.tweetId) : ''}
                    />)
            }
        </div>
    );
};

NotificationList.propTypes = {
    notifications: PropTypes.arrayOf(NotificationStructure),
    getProfileInformation: PropTypes.func,
    getTweetContent: PropTypes.func,
}

export default NotificationList;
