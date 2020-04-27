import {ADD_TWEET, REMOVE_TWEET, REPLACE_TWEET, SET_TWEETS} from '../actions/tweetsActions';
import {setTweets} from "../loaders/loadTweets";

export default function tweetsReducer(state = [], action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_TWEETS: {
            return payload.tweets;
        }

        case REMOVE_TWEET: {
            const filteredTweets = state.filter((tweet) => tweet.key !== payload.tweet.key);
            setTweets(filteredTweets);
            return filteredTweets;
        }

        case ADD_TWEET: {
            const newTweets = state.slice();
            newTweets.splice(0, 0, payload.tweet);
            setTweets(newTweets);
            return newTweets;
        }

        case REPLACE_TWEET: {
            const newTweets = state.slice();
            const index = newTweets.findIndex((tweet) => tweet.key === payload.tweet.key);
            newTweets[index] = Object.assign({}, payload.tweet);
            setTweets(newTweets);
            return newTweets;
        }

        default:
            return state;
    }
}