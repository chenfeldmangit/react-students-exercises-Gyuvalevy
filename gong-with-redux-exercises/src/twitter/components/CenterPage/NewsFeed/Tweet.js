import React from "react";
import PropTypes from 'prop-types';
import TweetAction from "./TweetAction";

const Tweet = ({profile, tweet, addComment, addRetweet, addLike, deleteTweet}) => {
    const { postTime, postContent, comments, retweets, likes } = tweet;

    return (
        <div className="feed-post">
            <div>
                <img className="profile-picture" src={profile.imgSrc} alt="profile"/>
            </div>
            <div className="post">
                <div className="post-information">
                    <div className="profile-information">
                        <div className="profile-name">{profile.name}</div>
                        <div className={profile.approved ? "approved" : "not-approved"}/>
                        <div className="profile-mention">@{profile.mention}  </div>
                        <div className="post-tile post-time">{postTime}</div>
                    </div>
                    <div className="arrow-down icon-hover"/>
                </div>
                <div className="post-content">
                    <span>{postContent}</span>
                </div>
                <div className="post-actions">
                    <TweetAction onClick={() => addComment(tweet)} divClassName="comments" content={comments} iconClass="speech-bubble"/>
                    <TweetAction onClick={() => addRetweet(tweet)} divClassName="retweets" content={retweets} iconClass="retweet"/>
                    <TweetAction onClick={() => addLike(tweet)} divClassName="likes" content={likes} iconClass="heart"/>
                    <TweetAction iconClass="upload"/>
                    <TweetAction onClick={() => deleteTweet(tweet)} iconClass="delete"/>
                </div>
            </div>
        </div>
    );
};

const Profile = PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mention: PropTypes.string.isRequired,
    approved: PropTypes.bool.isRequired,
});

const TweetStructure = PropTypes.shape({
    postTime: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
});

Tweet.propTypes = {
    profile: Profile.isRequired,
    tweet: TweetStructure.isRequired,
    deleteTweet: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    addRetweet: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
}

export default Tweet;
