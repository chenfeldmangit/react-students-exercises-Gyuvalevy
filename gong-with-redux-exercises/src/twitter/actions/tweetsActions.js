export const SET_TWEETS = 'SET_TWEETS';
export const APPEND_TWEET = 'APPEND_TWEET';
export const REPLACE_TWEET = 'REPLACE_TWEET';
export const REMOVE_TWEET = 'REMOVE_TWEET';

export function setTweets() {
    return {
        type: SET_TWEETS,
    };
}

export function appendTweet(tweet) {
    return {
        type: APPEND_TWEET,
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
