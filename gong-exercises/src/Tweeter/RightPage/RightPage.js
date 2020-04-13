import React from "react";
import '../../sass/twitter-right-side.sass';
import EditBox from "../Common/EditBox";

const RightPage = () => {
    return (
        <>
            <div className="right-wrapper">
                <EditBox boxId="searchTweet"
                         placeholder="Search Twitter"
                         iconClass="search-icon"
                         onChangeFunc={()=> alert("Search")}
                 />
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
