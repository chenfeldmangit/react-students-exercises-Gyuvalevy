import React from "react";
import '../../../../scss/twitter-left-side.scss';
import '../../../../scss/twitter-center-side.scss';
import {Link} from "react-router-dom";
import Button from "../../Common/Button";
import {Profile} from "../../../Shapes/Profile";

const Follow = ({iconClass, link}) => {
    return (
        <div>
            <i className={`small-icon icon-right-pad ${iconClass}`}/>
            <span>{link}</span>
        </div>
    );
}

const ProfilePage = ({profile}) => {
    return (
        <div id="profileCenter" className="center-container">
            <div className="profile-title">
                <div className="title">Profile</div>
                <Link to="/profile/edit">
                    <Button className="edit-profile-button" text="Edit Profile" />
                </Link>
            </div>
            <div className="profile-details">
                <div className="profile-basic-info">
                    <div>
                        <i><img className="profile-picture" src={profile.imgSrc} alt="profile"/></i>
                    </div>
                    <div>
                        <div id="profileName">{profile.name}</div>
                        <div className="profile-mention">{profile.mention}</div>
                    </div>
                </div>
                <div>{profile.description}</div>
                <div className="profile-section profile-description">
                    <Follow iconClass="location" link={profile.address}/>
                    <Follow iconClass="hyperlink" link={profile.homelink}/>
                </div>
                <div className="profile-section">
                    <div><span id="profileFollowing">{profile.followers}</span> Following</div>
                    <div><span id="profileFollowers">{profile.followers}</span> Followers</div>
                </div>
            </div>
        </div>
    )
};

ProfilePage.propTypes = {
    profile: Profile.isRequired,
}

export default ProfilePage;
