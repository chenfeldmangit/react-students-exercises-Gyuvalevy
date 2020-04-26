import React from "react";
import PropTypes from 'prop-types';

export const NOTIFICATION_ACTION_TYPE_LIKE = 'like';
export const NOTIFICATION_ACTION_TYPE_FOLLOWS = 'follows';
export const NOTIFICATION_ACTION_TYPE_TWEET = 'tweet';

const renderName = (name, index, all) => {
    let addition = '';
    if (index === 0 && all.length === 1)
        addition = ' ';
    else if(all.length - 1 !== index && all.length - 2 !== index)
        addition = ', ';
    else if (all.length - 2 === index)
        addition = ' and ';

    return <><span className="by-name">{name}</span>{addition}</>
};

const appendNames = (names) => names.map(renderName);

export const NotificationActionAssets = {
    'like': {
        type: NOTIFICATION_ACTION_TYPE_LIKE,
        iconClass: 'heart-red',
        renderText: (names) => <span>{appendNames(names)} liked you tweet</span>,
    },
    'follows': {
        type: NOTIFICATION_ACTION_TYPE_FOLLOWS,
        iconClass: 'profile',
        renderText: (names) => <span>{appendNames(names)} followed you</span>,
    },
    'tweet': {
        type: NOTIFICATION_ACTION_TYPE_TWEET,
        iconClass: 'star',
        renderText: (names) => <span>In case you missed {appendNames(names)}'s Tweet{names.length > 1 ? 's' : ''}</span>,
    },
};

export const NotificationActionType =
    [NOTIFICATION_ACTION_TYPE_LIKE, NOTIFICATION_ACTION_TYPE_FOLLOWS, NOTIFICATION_ACTION_TYPE_TWEET];

export const NotificationAction = PropTypes.oneOf(NotificationActionType);
