export const SET_TWEETS = 'SET_TWEETS';
export const ADD_TWEET = 'ADD_TWEET';
export const REPLACE_TWEET = 'REPLACE_TWEET';
export const REMOVE_TWEET = 'REMOVE_TWEET';

export function setTweets() {
    return {
        type: SET_TWEETS,
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
