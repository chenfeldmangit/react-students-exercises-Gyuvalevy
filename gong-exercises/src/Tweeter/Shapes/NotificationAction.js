import React from "react";
import PropTypes from 'prop-types';

export const NOTIFICATION_ACTION_TYPE_LIKE = 'like';
export const NOTIFICATION_ACTION_TYPE_FOLLOWS = 'follows';
export const NOTIFICATION_ACTION_TYPE_TWEET = 'tweet';

export const NotificationActionAssets = {
    'like': {
        type: NOTIFICATION_ACTION_TYPE_LIKE,
        iconClass: 'heart-red',
        renderText: (name) => <span><span className="by-name">{name}</span> liked you tweet</span>,
    },
    'follows': {
        type: NOTIFICATION_ACTION_TYPE_FOLLOWS,
        iconClass: 'profile',
        renderText: (name) => <span><span className="by-name">{name}</span> followed you</span>,
    },
    'tweet': {
        type: NOTIFICATION_ACTION_TYPE_TWEET,
        iconClass: 'star',
        renderText: (name) => <span>In case you missed <span className="by-name">{name}</span>'s Tweet</span>,
    },
};

export const NotificationActionType =
    [NOTIFICATION_ACTION_TYPE_LIKE, NOTIFICATION_ACTION_TYPE_FOLLOWS, NOTIFICATION_ACTION_TYPE_TWEET];

export const NotificationAction = PropTypes.oneOf(NotificationActionType);
