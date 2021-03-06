import LocalStorageBasics from "./LocalStorageBasics";
import {
    NOTIFICATION_ACTION_TYPE_FOLLOWS,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_TWEET,
} from "../Shapes/NotificationAction";

const KEY = 'notifications';
const setAll = LocalStorageBasics.setItems(KEY);
const getAll = LocalStorageBasics.getItems(KEY);

let initialNotifications = [
    {
        key: 1,
        tweetId: 2,
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

function populateLocalStorage() {
    setAll(initialNotifications);
    return initialNotifications;
}

export function getNotifications() {
    return new Promise((resolve, reject) => {
        try {
            let all = getAll();
            if (!all)
                all = populateLocalStorage();
            setTimeout(() => resolve(all), 3000);
        } catch (err) {
            reject(err);
        }
    });
}

export function setNotifications(notifications) {
    return new Promise((resolve, reject) => {
        try {
            setAll(notifications);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

