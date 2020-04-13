import React from "react";
import PropTypes from 'prop-types';

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
                    <div className="action comments" onClick={addComment}>
                        <i className="small-icon icon-space-pad speech-bubble icon-hover"/>
                        <span>{comments}</span>
                    </div>
                    <div className="action retweets" onClick={addRetweet}>
                        <i className="small-icon icon-space-pad retweet icon-hover"/>
                        <span>{retweets}</span>
                    </div>
                    <div className="action likes" onClick={addLike}>
                        <i className="small-icon icon-space-pad heart icon-hover"/>
                        <span>{likes}</span>
                    </div>
                    <div className="action">
                        <i className="small-icon icon-space-pad upload icon-hover"/>
                    </div>
                    <div className="action">
                        <i className="small-icon icon-space-pad delete icon-hover"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TweetStructure = PropTypes.shape({
    profileImgSrc: PropTypes.string,
    profileName: PropTypes.string,
    profileMention: PropTypes.string,
    approved: PropTypes.bool,
    postTime: PropTypes.string,
    postContent: PropTypes.string,
    comments: PropTypes.number,
    retweets: PropTypes.number,
    likes: PropTypes.number,
});

Tweet.propTypes = {
    tweet: TweetStructure,
    addComment: PropTypes.func,
    addRetweet: PropTypes.func,
    addLike: PropTypes.func,
}

export default Tweet;
