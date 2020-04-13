import React from "react";
import '../../css/twitter-left-side.css';
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../css/twitter-center-side.css';

const HomePage = ({tweetsList, sendTweet, deleteTweet, addLike, addRetweet, addComment}) => {
    return (
        <div id="homepageCenter" className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={sendTweet}/>
            <TweetsList
                tweets={tweetsList}
                deleteTweet={deleteTweet}
                addLike={addLike}
                addRetweet={addRetweet}
                addComment={addComment}
            />
        </div>
    );
};

export default HomePage;
