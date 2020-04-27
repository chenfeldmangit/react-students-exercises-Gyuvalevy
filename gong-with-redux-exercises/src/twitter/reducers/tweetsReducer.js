import {SET_TWEETS} from '../actions/tweetsActions';

export default function tweetsReducer(state = [], action) {
    switch (action.type) {
        case SET_TWEETS:
            return action.payload.tweets;

        default:
            return state;
    }
}