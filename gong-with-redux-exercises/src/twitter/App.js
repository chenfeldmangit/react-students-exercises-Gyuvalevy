import React from 'react';
import {BrowserRouter} from "react-router-dom";
import LoadingContainer from "./containers/LoadingContainer";
import NavigationMenuContainer from "./containers/NavigationMenuContainer";
import RightPage from "./components/RightPage";
import LoginContainer from "./containers/Login/LoginContainer";
import './../scss/twitter.scss';
import './../scss/twitter-basics.scss';
import './../scss/twitter-icons.scss';
import CenterPageContainer from "./containers/CenterPageContainer";

const App = ({currentProfile}) => {

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                {!currentProfile
                    ? (<LoginContainer/>)
                    : (<>
                        <LoadingContainer/>
                        <NavigationMenuContainer/>
                        <CenterPageContainer/>
                        <RightPage/>
                    </>)
                }
            </div>
        </BrowserRouter>
    );
}

export default App;
