import {useArrayStore} from "./ArrayStore";

import {
    NOTIFICATION_ACTION_TYPE_FOLLOWS,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_TWEET,
} from "../Shapes/NotificationAction";

const KEY = 'notifications';

let initialNotifications = [
    {
        tweetId: 2,
        key: 1,
        action: NOTIFICATION_ACTION_TYPE_TWEET,
        byId: [1, 2],
    },
    {
        key: 2,
        action: NOTIFICATION_ACTION_TYPE_LIKE,
        byId: [1, 2, 2, 2],
    },
    {
        key: 3,
        action: NOTIFICATION_ACTION_TYPE_FOLLOWS,
        byId: [1],
    },
];

export const useNotifications = () => {

    // eslint-disable-next-line no-unused-vars
    let [notifications, setNotifications, getNotificationByKey, getNotificationById, appendNotification, replaceNotificationByKey, removeNotification]
        = useArrayStore(KEY, initialNotifications);

    return [notifications, setNotifications];
};
