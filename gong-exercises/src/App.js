import React, {Component} from 'react';
import NavigationMenu from "./Tweeter/NavigationMenu/NavigationMenu";
import CenterPage from "./Tweeter/CenterPage/CenterPage";
import Loading from "./Tweeter/Loading/Loading";
import RightPage from "./Tweeter/RightPage/RightPage";
import './sass/twitter.sass';
import './sass/twitter-basics.sass';
import './sass/twitter-icons.sass';
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

    changeLoading = (show) => {
        this.setState({showLoading: show});
    }

    switchProfile = () => {
        ProfilesLocalStorage.switchProfile();
        this.setState({profile: ProfilesLocalStorage.getCurrentProfile()});
    }

    render() {
        return (
            <BrowserRouter>
                <div className="main-wrapper">
                    <NavigationMenu switchProfile={this.switchProfile} profile={this.state.profile}/>
                    <Loading show={this.state.showLoading}/>
                    <CenterPage changeLoading={this.changeLoading} profile={this.state.profile}/>
                    <RightPage/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
