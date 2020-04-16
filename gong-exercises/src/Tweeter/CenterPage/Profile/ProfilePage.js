import React from "react";
import PropTypes from 'prop-types';
import '../../../scss/twitter-left-side.scss';
import '../../../scss/twitter-center-side.scss';
import {Link} from "react-router-dom";

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
                    <button className="basic-button edit-profile-button">Edit Profile</button>
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
                    <div><span id="profileFollowing"/>{profile.followers}<span> Following</span></div>
                    <div><span id="profileFollowers"/>{profile.followers}<span> Followers</span></div>
                </div>
            </div>
        </div>
    )
};

const Profile = PropTypes.shape({
    name: PropTypes.string.isRequired,
    mention: PropTypes.string.isRequired,
    approved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    homelink: PropTypes.string.isRequired,
    following: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
})

ProfilePage.propTypes = {
    profile: Profile.isRequired,
}

export default ProfilePage;
