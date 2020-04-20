import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Loading from "./Tweeter/components/Loading/Loading";
import CenterPageContainer from "./Tweeter/containers/CenterPage/CenterPageContainer";
import RightPage from "./Tweeter/components/RightPage/RightPage";
import LoginContainer from "./Tweeter/containers/Login/LoginContainer";
import {useProfiles} from "./Tweeter/Stores/ProfileStore";
import './scss/twitter.scss';
import './scss/twitter-basics.scss';
import './scss/twitter-icons.scss';
import NavigationMenuContainer from "./Tweeter/containers/NavigationMenu/NavigationMenuContainer";

const App = (props) => {
    const [profiles, setProfiles] = useProfiles();
    // const [currentProfile, setCurrentProfile, updateProfile] = useCurrentProfile();

    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setLoggedIn(!!props.currentProfile);
    }, [props.currentProfile]);

    const changeCurrentProfile = (profileNewDetails) => {

        const changedProfile = props.currentProfile;
        changedProfile.name = profileNewDetails.name;
        changedProfile.mention = profileNewDetails.mention;
        changedProfile.description = profileNewDetails.description;

        // update local storage
        const pros = profiles.slice();
        const itemIndex = pros.findIndex(value => value.id === changedProfile.id);
        pros[itemIndex] = changedProfile;
        setProfiles(pros);

        // update store
        props.updateCurrentUserProfile(changedProfile);
    }

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                {isLoggedIn
                    ? (
                        <>
                            <Loading show={props.showLoading}/>
                            <NavigationMenuContainer />
                            <CenterPageContainer show={!props.showLoading} changeLoading={props.setShowLoading}
                                                 profile={props.currentProfile} saveProfile={changeCurrentProfile}/>
                            <RightPage/>
                        </>
                    )
                    : (
                        <LoginContainer profiles={profiles} />
                    )
                }
            </div>

        </BrowserRouter>
    );
}

export default App;
