import {
    NOTIFICATION_ACTION_TYPE_FOLLOWS,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_TWEET,
} from "../Shapes/NotificationAction";
import LocalStorageBasics from "./LocalStorageBasics";

const KEY = 'notifications';

const getAll = LocalStorageBasics.getItems(KEY);
const setAll = LocalStorageBasics.setItems(KEY);
const append = LocalStorageBasics.appendItems(KEY);
const remove = LocalStorageBasics.removeItem(KEY);

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
        ];

        setAll(initialNotifications);
    };

    // append to start
    static appendNotifications = (newNotification) => append(newNotification);

    static getNotifications = () => getAll();

    static removeNotification = (notification) => remove(notification);

    static getKeyTweets = () => {
        return KEY
    };
}

export default NotificationLocalStorage;