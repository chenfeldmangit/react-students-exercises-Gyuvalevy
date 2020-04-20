import React from "react";
import '../../../../scss/twitter-left-side.scss';
import Tweet from "./Tweet";
import PropTypes from "prop-types";

const TweetsList = ({tweets, getProfileInformation, replaceTweet, deleteTweet}) => {
    let profiles = {};

    const getProfile = (profileId) => {
        if (!profiles[profileId])
            profiles[profileId] = getProfileInformation(profileId);
        return profiles[profileId];
    }

    return (
        <div className="feed-posts scroll">
            {
                tweets.map(tweet =>
                    <Tweet
                        key={tweet.key}
                        tweet={tweet}
                        profile={getProfile(tweet.profileId)}
                        replaceTweet={replaceTweet}
                        deleteTweet={() => deleteTweet(tweet)}
                    />)
            }
        </div>
    );
};

TweetsList.propTypes = {
    getProfileInformation: PropTypes.func,
    replaceTweet: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
}

export default TweetsList;
