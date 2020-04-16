import React from "react";
import PropTypes from 'prop-types';
import TweetAction from "./TweetAction";

const Tweet = (props) => {
    const { postTime, postContent, comments, retweets, likes } = props.tweet;
    const { profile } = props;

    const addLike = () => {
        props.tweet.likes++;
        props.replaceTweet(props.tweet);
    };

    const addComment = () => {
        props.tweet.comments++;
        props.replaceTweet(props.tweet);
    };

    const addRetweets = () => {
        props.tweet.retweets++;
        props.replaceTweet(props.tweet);
    };

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
                    <TweetAction onClick={addComment} divClassName="comments" content={comments} iconClass="speech-bubble"/>
                    <TweetAction onClick={addRetweets} divClassName="retweets" content={retweets} iconClass="retweet"/>
                    <TweetAction onClick={addLike} divClassName="likes" content={likes} iconClass="heart"/>
                    <TweetAction iconClass="upload"/>
                    <TweetAction onClick={props.deleteTweet} iconClass="delete"/>
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
    replaceTweet: PropTypes.func.isRequired,
    deleteTweet: PropTypes.func.isRequired,
}

export default Tweet;
