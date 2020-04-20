import React from "react";
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../../../scss/twitter-center-side.scss';
import '../../../../scss/twitter-left-side.scss';

const NewsFeed = ({tweetsList, getProfileInformation, sendTweet, replaceTweet, deleteTweet}) => {
    return (
        <div className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={sendTweet}/>
            <TweetsList
                tweets={tweetsList}
                getProfileInformation={getProfileInformation}
                replaceTweet={replaceTweet}
                deleteTweet={deleteTweet}
            />
        </div>
    );
};

export default NewsFeed;
