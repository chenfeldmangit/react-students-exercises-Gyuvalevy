import {connect} from "react-redux";
import {addNotification} from "../../actions/notificationsActions";
import Tweet from "../../components/CenterPage/NewsFeed/Tweet";
import React from "react";
import {removeTweet, replaceTweet} from "../../actions/tweetsActions";
import {
    NOTIFICATION_ACTION_TYPE_COMMENT,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_RETWEET
} from "../../Shapes/NotificationAction";

function TweetContainer({tweet, profiles, currentUser, replaceTweet, addNotification, deleteTweet}) {

    const itemIndex = profiles.findIndex(value => value.id === tweet.profileId);
    const profile = profiles[itemIndex]

    const addLike = (tweet) => {
        const notification = {
            key: Math.floor(Math.random() * 100000),
            tweetId: tweet.key,
            action: NOTIFICATION_ACTION_TYPE_LIKE,
            byId: [currentUser.id],
        };
        replaceTweet(tweet);
        addNotification(notification);
    }

    const addRetweet = (tweet) => {
        const notification = {
            key: Math.floor(Math.random() * 100000),
            tweetId: tweet.key,
            action: NOTIFICATION_ACTION_TYPE_RETWEET,
            byId: [currentUser.id],
        };
        replaceTweet(tweet);
        addNotification(notification);
    }

    const addComment = (tweet) => {
        const notification = {
            key: Math.floor(Math.random() * 100000),
            tweetId: tweet.key,
            action: NOTIFICATION_ACTION_TYPE_COMMENT,
            byId: [currentUser.id],
        };
        replaceTweet(tweet);
        addNotification(notification);
    }

    return (
        <Tweet
            profile={profile}
            tweet={tweet}
            deleteTweet={deleteTweet}
            addLike={addLike}
            addRetweet={addRetweet}
            addComment={addComment}
        />
    )
}


const mapStateToProps = (state) => ({
    profiles: state.profiles,
    currentUser: state.currentUserDetails.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    replaceTweet: (tweet) => dispatch(replaceTweet(tweet)),
    addNotification: (notification) => dispatch(addNotification(notification)),
    deleteTweet: (tweet) => dispatch(removeTweet(tweet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetContainer);

