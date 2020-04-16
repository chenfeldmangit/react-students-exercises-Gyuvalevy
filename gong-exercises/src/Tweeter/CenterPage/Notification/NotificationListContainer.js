import React from "react";
import NotificationList from "./NotificationList";

const NotificationListContainer = ({notifications, getProfileInformation, getTweetContent}) => {
    // const [notifications, setNotifications] = useState(NotificationLocalStorage.getTweets());
    //
    // useEffect(() => {
    //     ProfilesLocalStorage.populateLocalStorage();
    //     TweeterLocalStorage.populateLocalStorage();
    // }, []);
    //
    // useEffect(() => {
    //     props.changeLoading(false);
    // }, [notifications]);


    return (
        <NotificationList
            notifications={notifications}
            getProfileInformation={getProfileInformation}
            getTweetContent={getTweetContent}
        />
    );
};

export default NotificationListContainer;
