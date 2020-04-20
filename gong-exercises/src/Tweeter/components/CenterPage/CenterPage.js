import React from "react";
import {Switch, Route} from 'react-router-dom';
import '../../../scss/twitter-left-side.scss';
import '../../../scss/twitter-center-side.scss';

const CenterPage = (props) => {
    return (<div id="centerPage" className="center-wrapper">
            <Switch>
                <Route path="/" exact component={props.renderNewsFeedPageComponent()}/>
                <Route path="/profile" exact component={props.renderProfileComponent()}/>
                <Route path="/profile/edit" component={props.renderEditProfileComponent()}/>
                <Route path="/notifications" component={props.renderNotificationListComponent()}/>
            </Switch>
        </div>
    );
};

export default CenterPage;
