import React from "react";
import '../../../../scss/twitter-left-side.scss';
import TweetContainer from "../../../containers/CenterPage/TweetContainer";

const TweetsList = ({tweets}) => {
    return (
        <div className="feed-posts scroll">
            {
                tweets.map(tweet => <TweetContainer key={tweet.key} tweet={tweet}/>)
            }
        </div>
    );
};

export default TweetsList;
