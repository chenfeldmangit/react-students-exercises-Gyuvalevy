import {
    NOTIFICATION_ACTION_TYPE_FOLLOWS,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_TWEET,
} from "./Shapes/NotificationAction";
import LocalStorageBasics from "./LocalStorageBasics";

const KEY = 'notifications';

const getNotificationsFunction = LocalStorageBasics.getItems(KEY);
const appendNotificationsFunction = LocalStorageBasics.appendItems(KEY);
const removeNotificationsFunction = LocalStorageBasics.removeItem(KEY);

class NotificationLocalStorage {

    static isLocalStorageExists = () => {
        return !!NotificationLocalStorage.getNotifications();
    };

    static populateLocalStorage = () => {
        if (NotificationLocalStorage.isLocalStorageExists())
            return;

        let initialNotifications = [
            {
                tweetId: 2,
                key: 1,
                action: NOTIFICATION_ACTION_TYPE_TWEET,
                byId: 1,
            },
            {
                key: 2,
                action: NOTIFICATION_ACTION_TYPE_LIKE,
                byId: 1,
            },
            {
                key: 3,
                action: NOTIFICATION_ACTION_TYPE_FOLLOWS,
                byId: 1,
            },
        ]

        localStorage.setItem(KEY, JSON.stringify(initialNotifications))
    };

    // append to start
    static appendNotifications = (newNotification) => appendNotificationsFunction(newNotification);

    static getNotifications = () => getNotificationsFunction();

    static removeNotification = (notification) => removeNotificationsFunction(notification);

    static getKeyTweets = () => {
        return KEY
    };
}

export default NotificationLocalStorage;