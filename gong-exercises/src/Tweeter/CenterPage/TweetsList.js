import React from "react";
import '../../css/twitter-left-side.css';
import Tweet from "./Tweet";

const TweetsList = ({tweets, tweetAddLike, tweetAddComment, tweetAddRetweet}) => {
    return (
        <div id="feedPosts" className="feed-posts scroll">
            {
                tweets.map(tweet =>
                    <Tweet
                        key={tweet.key}
                        tweet={tweet}
                        addLike={tweetAddLike(tweet.key)}
                        addComment={tweetAddComment(tweet.key)}
                        addRetweet={tweetAddRetweet(tweet.key)}
                    />
                )
            }
        </div>
    );
};

export default TweetsList;
