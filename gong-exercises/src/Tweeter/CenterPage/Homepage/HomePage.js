import React from "react";
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../../sass/twitter-center-side.sass';
import '../../../sass/twitter-left-side.sass';

const HomePage = ({tweetsList, getProfileInformation, sendTweet, deleteTweet, addLike, addRetweet, addComment}) => {
    return (
        <div id="homepageCenter" className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={sendTweet}/>
            <TweetsList
                tweets={tweetsList}
                getProfileInformation={getProfileInformation}
                deleteTweet={deleteTweet}
                addLike={addLike}
                addRetweet={addRetweet}
                addComment={addComment}
            />
        </div>
    );
};

export default HomePage;
