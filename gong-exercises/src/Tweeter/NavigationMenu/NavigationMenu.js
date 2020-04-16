import React from "react";
import MenuItem from "./MenuItem";
import '../../scss/twitter-left-side.scss';
import Button from "../Common/Button";

const NavigationMenu = ({profile, switchProfile}) => {
    return (
        <>
            <div className="left-wrapper">
                <MenuItem className="menu-item left-menu-icon"/>
                <MenuItem className="menu-item left-menu-home" text="Home" id="leftMenuHomeLink" link="/"/>
                <MenuItem className="menu-item left-menu-explore" text="Explore"/>
                <MenuItem className="menu-item left-menu-notification" text="Notification" link="/notifications"/>
                <MenuItem className="menu-item left-menu-messages" text="Messages"/>
                <MenuItem className="menu-item left-menu-bookmarks" text="Bookmarks"/>
                <MenuItem className="menu-item left-menu-lists" text="Lists"/>
                <MenuItem className="menu-item" id="leftMenuProfileLink" text="Profile"
                          imageSrc={profile.imgSrc} link="/profile"/>
                <MenuItem className="menu-item left-menu-more" text="More"/>
                <Button onChangeFunc={switchProfile}
                        className="menu-item left-tweet-button"
                        text="Switch Profile"
                />
            </div>
        </>
    );
};

export default NavigationMenu;
