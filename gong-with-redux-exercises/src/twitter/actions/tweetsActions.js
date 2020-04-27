export const INIT_TWEETS = 'INIT_TWEETS';
export const SET_TWEETS = 'SET_TWEETS';
export const ADD_TWEET = 'ADD_TWEET';
export const REPLACE_TWEET = 'REPLACE_TWEET';
export const REMOVE_TWEET = 'REMOVE_TWEET';

export function initTweets() {
    return {
        type: INIT_TWEETS,
    };
}

export function setTweets(tweets) {
    return {
        type: SET_TWEETS,
        payload: {
            tweets,
        }
    };
}

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        payload: {
            tweet,
        },
    };
}

export function replaceTweet(tweet) {
    return {
        type: REPLACE_TWEET,
        payload: {
            tweet,
        }
    };
}

export function removeTweet(tweet) {
    return {
        type: REMOVE_TWEET,
        payload: {
            tweet,
        },
    };
}
