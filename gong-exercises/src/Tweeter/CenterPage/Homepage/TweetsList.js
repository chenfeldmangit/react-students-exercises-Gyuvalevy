import React from "react";
import '../../../sass/twitter-left-side.sass';
import Tweet from "./Tweet";
import PropTypes from "prop-types";

const TweetsList = ({tweets, getProfileInformation, addLike, addComment, addRetweet, deleteTweet}) => {
    let profiles = {};

    const getProfile = (profileId) => {
        if (!profiles[profileId])
            profiles[profileId] = getProfileInformation(profileId);
        return profiles[profileId];
    }

    return (
        <div id="feedPosts" className="feed-posts scroll">
            {
                tweets.map(tweet =>
                    <Tweet
                        key={tweet.key}
                        tweet={tweet}
                        profile={getProfile(tweet.profileId)}
                        deleteTweet={() => deleteTweet(tweet)}
                        addLike={() => addLike(tweet)}
                        addRetweet={() => addRetweet(tweet)}
                        addComment={() => addComment(tweet)}
                    />)
            }
        </div>
    );
};

TweetsList.propTypes = {
    deleteTweet: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    addRetweet: PropTypes.func.isRequired,
}

export default TweetsList;
