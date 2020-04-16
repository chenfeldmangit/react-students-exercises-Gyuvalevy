import React from "react";
import NotificationList from "./NotificationList";

const NotificationListContainer = ({notifications, getProfileInformation, getTweetContent}) => {
    return (
        <NotificationList
            notifications={notifications}
            getProfileInformation={getProfileInformation}
            getTweetContent={getTweetContent}
        />
    );
};

export default NotificationListContainer;
