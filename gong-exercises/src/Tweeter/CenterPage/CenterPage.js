import React from "react";
import {Switch, Route} from 'react-router-dom';
import '../../scss/twitter-left-side.scss';
import '../../scss/twitter-center-side.scss';

const CenterPage = ({renderNewsFeedPageComponent, renderProfileComponent, renderEditProfileComponent}) => {
    return (<div id="centerPage" className="center-wrapper">
            <Switch>
                <Route path="/" exact component={renderNewsFeedPageComponent()}/>
                <Route path="/profile" exact component={renderProfileComponent()}/>
                <Route path="/profile/edit" component={renderEditProfileComponent()}/>
            </Switch>
        </div>
    );
};

export default CenterPage;
