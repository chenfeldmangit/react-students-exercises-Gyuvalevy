import React, {Component} from 'react';
import NavigationMenu from "./Tweeter/NavigationMenu/NavigationMenu";
import CenterPageContainer from "./Tweeter/CenterPage/CenterPageContainer";
import Loading from "./Tweeter/Loading/Loading";
import RightPage from "./Tweeter/RightPage/RightPage";
import './scss/twitter.scss';
import './scss/twitter-basics.scss';
import './scss/twitter-icons.scss';
import ProfilesLocalStorage from "./Tweeter/ProfilesLocalStorage";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoading: true,
            profile: ProfilesLocalStorage.getCurrentProfile(),
        };
    }

    changeLoading = (show) => this.setState({showLoading: show})

    switchProfile = () => {
        ProfilesLocalStorage.switchProfile();
        this.setState({profile: ProfilesLocalStorage.getCurrentProfile()});
    }

    changeCurrentProfile = (profileNewDetails) => {

        const changedProfile = this.state.profile;
        changedProfile.name = profileNewDetails.name;
        changedProfile.mention = profileNewDetails.mention;
        changedProfile.description = profileNewDetails.description;

        ProfilesLocalStorage.setCurrentProfile(changedProfile);
        this.setState({profile: ProfilesLocalStorage.getCurrentProfile()});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="main-wrapper">
                    <Loading show={this.state.showLoading}/>
                    <NavigationMenu switchProfile={this.switchProfile} profile={this.state.profile}/>
                    <CenterPageContainer show={!this.state.showLoading} changeLoading={this.changeLoading}
                                         profile={this.state.profile} saveProfile={this.changeCurrentProfile}/>
                    <RightPage/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
