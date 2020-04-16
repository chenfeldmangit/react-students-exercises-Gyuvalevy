import React, { Component } from "react";
import MenuItem from "./MenuItem";
import '../../scss/twitter-left-side.scss';

class NavigationMenu extends Component {
    render() {
        return (
            <>
                <div className="left-wrapper">
                    <MenuItem className="menu-item left-menu-icon" />
                    <MenuItem className="menu-item left-menu-home" text="Home" id="leftMenuHomeLink" link="/" />
                    <MenuItem className="menu-item left-menu-explore" text="Explore" />
                    <MenuItem className="menu-item left-menu-notification" text="Notification" />
                    <MenuItem className="menu-item left-menu-messages" text="Messages" />
                    <MenuItem className="menu-item left-menu-bookmarks" text="Bookmarks"  />
                    <MenuItem className="menu-item left-menu-lists" text="Lists" />
                    <MenuItem className="menu-item" id="leftMenuProfileLink" text="Profile" imageSrc={this.props.profile.imgSrc} link="/profile" />
                    <MenuItem className="menu-item left-menu-more" text="More" />
                    <button className="menu-item basic-button left-tweet-button" onClick={this.props.switchProfile}>Switch Profile</button>
                </div>
            </>
        );
    }
}

export default NavigationMenu;
