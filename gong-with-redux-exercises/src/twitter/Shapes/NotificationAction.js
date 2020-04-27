import React from "react";
import PropTypes from 'prop-types';
import {getId} from "../util";

export const NOTIFICATION_ACTION_TYPE_LIKE = 'like';
export const NOTIFICATION_ACTION_TYPE_FOLLOWS = 'follows';
export const NOTIFICATION_ACTION_TYPE_TWEET = 'tweet';
export const NOTIFICATION_ACTION_TYPE_RETWEET = 'retweet';
export const NOTIFICATION_ACTION_TYPE_COMMENT = 'comment';

const renderName = (name, index, all) => {
    let addition = '';
    if (index === 0 && all.length === 1)
        addition = ' ';
    else if(all.length - 1 !== index && all.length - 2 !== index)
        addition = ', ';
    else if (all.length - 2 === index)
        addition = ' and ';

    return <span key={getId()}><span className="by-name">{name}</span>{addition}</span>
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
        renderText: (names) => <span>In case you missed {appendNames(names)}'s tweet{names.length > 1 ? 's' : ''}</span>,
    },
    'retweet': {
        type: NOTIFICATION_ACTION_TYPE_RETWEET,
        iconClass: 'retweet',
        renderText: (names) => <span>{appendNames(names)} retweeted you tweet</span>,
    },
    'comment': {
        type: NOTIFICATION_ACTION_TYPE_COMMENT,
        iconClass: 'speech-bubble',
        renderText: (names) => <span>{appendNames(names)} commented on you tweet</span>,
    },
};

export const NotificationActionType =
    [NOTIFICATION_ACTION_TYPE_LIKE, NOTIFICATION_ACTION_TYPE_FOLLOWS, NOTIFICATION_ACTION_TYPE_TWEET,
        NOTIFICATION_ACTION_TYPE_RETWEET, NOTIFICATION_ACTION_TYPE_COMMENT];

export const NotificationAction = PropTypes.oneOf(NotificationActionType);
