import React from "react";
import PropTypes from "prop-types";
import Notification from './Notification';
import {NotificationStructure} from "../../../Shapes/NotificationStructure";
import '../../../../scss/twitter-notifications.scss';

const NotificationList = ({notifications, profiles, tweets}) => {

    const getProfile = (profileId) => {
        const itemIndex = profiles.findIndex(value => value.id === profileId);
        return profiles[itemIndex];
    }

    const getProfiles = (profilesId) => {
        return profilesId.map((profileId) => getProfile(profileId));
    }

    const getTweetContent = (tweetKey) => {
        const itemIndex = tweets.findIndex(value => value.key === tweetKey);
        return tweets[itemIndex].postContent;
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
