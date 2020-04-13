import React, {Component} from "react";
import PropTypes from 'prop-types';
import TweetAction from "./TweetAction";

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = { tweet: props.tweet };
    }

    render() {
        const { postTime, postContent, comments, retweets, likes } = this.state.tweet;
        const { profile } = this.props;

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
                        <TweetAction onClick={this.props.addComment} divClassName="comments" content={comments}
                                     iconClass="speech-bubble"/>
                        <TweetAction onClick={this.props.addRetweet} divClassName="retweets" content={retweets}
                                     iconClass="retweet"/>
                        <TweetAction onClick={this.props.addLike} divClassName="likes" content={likes} iconClass="heart"/>
                        <TweetAction iconClass="upload"/>
                        <TweetAction onClick={this.props.deleteTweet} iconClass="delete"/>
                    </div>
                </div>
            </div>
        );
    }
}

const Profile = PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    mention: PropTypes.string.isRequired,
    approved: PropTypes.bool.isRequired,
});

const TweetStructure = PropTypes.shape({
    profile: Profile.isRequired,
    postTime: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
});

Tweet.propTypes = {
    tweet: TweetStructure.isRequired,
    deleteTweet: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    addRetweet: PropTypes.func.isRequired,
}

export default Tweet;
