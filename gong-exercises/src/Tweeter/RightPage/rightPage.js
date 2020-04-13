import React from "react";
import '../../css/twitter-right-side.css';

const RightPage = () => {
    return (
        <>
            <div className="right-wrapper">
                <div className="basic-input-wrapper">
                    <i className="search-icon"/>
                    <label>
                        <input id="searchTweet" placeholder="Search Twitter" className="basic-input"/>
                    </label>
                </div>
                <div className="right-box-wrapper">
                    Israel trends
                </div>
                <div className="right-box-wrapper to-follow">
                    <div>Who to follow</div>
                    <hr/>
                    <div>Who to follow</div>
                    <hr/>
                    <div>Who to follow</div>
                    <hr/>
                    <div className="show-more"><a className="link" href="http://google.com">Show More</a></div>
                </div>
            </div>
        </>
    );
};

export default RightPage;
