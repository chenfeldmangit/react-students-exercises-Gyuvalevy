export const INIT_TWEETS = 'INIT_TWEETS';
export const SET_TWEETS = 'SET_TWEETS';
export const ADD_TWEET = 'ADD_TWEET';
export const REMOVE_TWEET = 'REMOVE_TWEET';

export const LIKE_TWEET = 'LIKE_TWEET';
export const RETWEET_TWEET = 'RETWEET_TWEET';
export const COMMENT_TWEET = 'COMMENT_TWEET';

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

export function addTweet(content) {
    return {
        type: ADD_TWEET,
        payload: {
            content,
        },
    };
}

export function likeTweet(tweet) {
    return {
        type: LIKE_TWEET,
        payload: {
            tweet,
        }
    };
}

export function retweetTweet(tweet) {
    return {
        type: RETWEET_TWEET,
        payload: {
            tweet,
        }
    };
}

export function commentTweet(tweet) {
    return {
        type: COMMENT_TWEET,
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
