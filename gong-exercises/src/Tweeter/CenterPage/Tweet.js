import React from "react";
import PropTypes from 'prop-types';
import TweetAction from "./TweetAction";

const Tweet = ({tweet, addLike, addComment, addRetweet}) => {
    const { profileImgSrc, profileName, profileMention, postTime, approved, postContent, comments, retweets, likes } = tweet;
    return (
        <div className="feed-post">
            <div>
                <img className="profile-picture" src={profileImgSrc} alt="profile"/>
            </div>
            <div className="post">
                <div className="post-information">
                    <div className="profile-information">
                        <div className="profile-name">{profileName}</div>
                        <div className={approved ? "approved" : "not-approved"}/>
                        <div className="profile-mention">@{profileMention}  </div>
                        <div className="post-tile post-time">{postTime}</div>
                    </div>
                    <div className="arrow-down icon-hover"/>
                </div>
                <div className="post-content">
                    <span>{postContent}</span>
                </div>
                <div className="post-actions">
                    <TweetAction onClick={addComment} divClassName="comments" content={comments} iconClass="speech-bubble" />
                    <TweetAction onClick={addRetweet} divClassName="retweets" content={retweets} iconClass="retweet" />
                    <TweetAction onClick={addLike} divClassName="likes" content={likes} iconClass="heart" />
                    <TweetAction iconClass="upload" />
                    <TweetAction iconClass="delete" />
                </div>
            </div>
        </div>
    );
};

const TweetStructure = PropTypes.shape({
    profileImgSrc: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    profileMention: PropTypes.string.isRequired,
    approved: PropTypes.bool.isRequired,
    postTime: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
});

Tweet.propTypes = {
    tweet: TweetStructure.isRequired,
    addComment: PropTypes.func.isRequired,
    addRetweet: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
}

export default Tweet;
