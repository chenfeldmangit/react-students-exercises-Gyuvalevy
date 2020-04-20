import React, {useState} from 'react';
import NavigationMenu from "./Tweeter/components/NavigationMenu/NavigationMenu";
import CenterPageContainer from "./Tweeter/containers/CenterPage/CenterPageContainer";
import Loading from "./Tweeter/components/Loading/Loading";
import RightPage from "./Tweeter/components/RightPage/RightPage";
import './scss/twitter.scss';
import './scss/twitter-basics.scss';
import './scss/twitter-icons.scss';
import {BrowserRouter} from "react-router-dom";
import {useCurrentProfile} from "./Tweeter/Stores/ProfileStore";

const App = () => {
    const [currentProfile, setCurrentProfile, switchProfile] = useCurrentProfile();
    const [showLoading, setShowLoading] = useState(true);

    const changeCurrentProfile = (profileNewDetails) => {

        const changedProfile = currentProfile;
        changedProfile.name = profileNewDetails.name;
        changedProfile.mention = profileNewDetails.mention;
        changedProfile.description = profileNewDetails.description;

        setCurrentProfile(changedProfile);
    }

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <Loading show={showLoading}/>
                <NavigationMenu switchProfile={switchProfile} profile={currentProfile}/>
                <CenterPageContainer show={!showLoading} changeLoading={setShowLoading}
                                     profile={currentProfile} saveProfile={changeCurrentProfile}/>
                <RightPage/>
            </div>
        </BrowserRouter>
    );
}

export default App;
