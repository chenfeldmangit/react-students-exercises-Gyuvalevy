export function getId() {
    return Math.floor(Math.random() * 100000);
}

export function filterNotificationsForUser(notifications, userId) {
    return notifications
        .map(notification => {
            return {
                ...notification,
                byId: notification.byId.filter((id) => id !== userId)
            };
        })
        .filter(notification => notification.byId.length !== 0)
}