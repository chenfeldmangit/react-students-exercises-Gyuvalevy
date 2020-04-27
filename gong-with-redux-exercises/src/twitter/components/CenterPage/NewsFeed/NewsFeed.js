import React from "react";
import '../../../../scss/twitter-center-side.scss';
import '../../../../scss/twitter-left-side.scss';
import TweetsListContainer from "../../../containers/CenterPage/TweetsListContainer";
import AddTweetContainer from "../../../containers/CenterPage/AddTweetContainer";

const NewsFeed = () => {
    return (
        <div className="center-container">
            <div className="title">Home</div>
            <AddTweetContainer />
            <TweetsListContainer />
        </div>
    );
};

export default NewsFeed;
