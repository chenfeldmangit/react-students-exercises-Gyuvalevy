import React from "react";
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../../../scss/twitter-center-side.scss';
import '../../../../scss/twitter-left-side.scss';

const NewsFeed = ({tweets, profiles, sendTweet, replaceTweet, deleteTweet, currentUser}) => {

    const createTweet = (tweetContent) => {
        let now = new Date();
        const newTweet = {
            key: Math.floor(Math.random() * 100000),
            profileId: currentUser.id,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: tweetContent,
        };

        sendTweet(newTweet);
    }

    return (
        <div className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={createTweet}/>
            <TweetsList
                tweets={tweets}
                profiles={profiles}
                replaceTweet={replaceTweet}
                deleteTweet={deleteTweet}
            />
        </div>
    );
};

export default NewsFeed;
