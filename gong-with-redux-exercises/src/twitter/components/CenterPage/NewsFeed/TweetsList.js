import React from "react";
import '../../../../scss/twitter-left-side.scss';
import Tweet from "./Tweet";
import PropTypes from "prop-types";

const TweetsList = ({tweets, profiles, replaceTweet, deleteTweet}) => {

    const getProfile = (profileId) => {
        const itemIndex = profiles.findIndex(value => value.id === profileId);
        return profiles[itemIndex];
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
