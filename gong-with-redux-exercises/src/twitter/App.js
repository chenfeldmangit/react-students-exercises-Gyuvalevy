import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavigationMenuContainer from "./containers/NavigationMenuContainer";
import RightPage from "./components/RightPage";
import LoginContainer from "./containers/Login/LoginContainer";
import './../scss/twitter.scss';
import './../scss/twitter-basics.scss';
import './../scss/twitter-icons.scss';
import CenterPageContainer from "./containers/CenterPageContainer";

const App = ({isLoggedIn}) => {

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                {!isLoggedIn
                    ? (<LoginContainer/>)
                    : (<>
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
