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

function populateLocalStorage() {
    setAll(initialNotifications);
    return initialNotifications;
}

export function getNotifications() {
    let all = getAll();
    if (!all)
        all = populateLocalStorage();
    return all;
}

