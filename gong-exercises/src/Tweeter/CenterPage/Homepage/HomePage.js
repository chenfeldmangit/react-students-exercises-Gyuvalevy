import React from "react";
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../../sass/twitter-center-side.sass';
import '../../../sass/twitter-left-side.sass';

const HomePage = ({tweetsList, getProfileInformation, sendTweet, replaceTweet, deleteTweet}) => {
    return (
        <div id="homepageCenter" className="center-container">
            <div className="title">Home</div>
            <AddTweet sendTweet={sendTweet}/>
            <TweetsList
                tweets={tweetsList}
                getProfileInformation={getProfileInformation}
                replaceTweet={replaceTweet}
                deleteTweet={deleteTweet}
            />
        </div>
    );
};

export default HomePage;
