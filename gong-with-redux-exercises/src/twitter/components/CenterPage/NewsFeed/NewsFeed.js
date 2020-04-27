import React from "react";
import AddTweet from "./AddTweet";
import '../../../../scss/twitter-center-side.scss';
import '../../../../scss/twitter-left-side.scss';
import {NOTIFICATION_ACTION_TYPE_TWEET} from "../../../Shapes/NotificationAction";
import TweetsListContainer from "../../../containers/CenterPage/TweetsListContainer";

const NewsFeed = ({sendTweet, currentUser}) => {

    const createTweet = (tweetContent) => {
        let now = new Date();
        return {
            key: Math.floor(Math.random() * 100000),
            profileId: currentUser.id,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: tweetContent,
        };
    }

    const createNotifications = (tweet) => {
        return {
            key: Math.floor(Math.random() * 100000),
            tweetId: tweet.key,
            action: NOTIFICATION_ACTION_TYPE_TWEET,
            byId: [currentUser.id],
        };
    }

    const send = (tweetContent) => {
        const tweet = createTweet(tweetContent);
        const notification = createNotifications(tweet);
        sendTweet(tweet, notification);
    }

    return (
        <div className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={send}/>
            <TweetsListContainer />
        </div>
    );
};

export default NewsFeed;
