import React, { Component } from "react";
import MenuItem from "./MenuItem";
import '../../css/twitter-left-side.css';

class NavigationMenu extends Component {
    render() {
        return (
            <>
                <div className="left-wrapper">
                    <MenuItem className="left-menu-icon" />
                    <MenuItem className="left-menu-home" text="Home" id="leftMenuHomeLink" />
                    <MenuItem className="left-menu-explore" text="Explore" />
                    <MenuItem className="left-menu-notification" text="Notification" />
                    <MenuItem className="left-menu-messages" text="Messages" />
                    <MenuItem className="left-menu-bookmarks" text="Bookmarks"  />
                    <MenuItem className="left-menu-lists" text="Lists" />
                    <MenuItem id="leftMenuProfileLink" text="Profile" imageSrc="https://pbs.twimg.com/profile_images/1156850474110345216/FWeRQirQ_bigger.jpg" />
                    <MenuItem className="left-menu-more" text="More" />
                    <button className="basic-button left-tweet-button">Tweet</button>
                </div>
            </>
        );
    }
}

export default NavigationMenu;
