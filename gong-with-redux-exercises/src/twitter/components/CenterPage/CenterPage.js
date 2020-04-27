import React from "react";
import {Switch, Route} from 'react-router-dom';
import ProfilePageContainer from "../../containers/CenterPage/ProfilePageContainer";
import EditProfilePageContainer from "../../containers/CenterPage/EditProfilePageContainer";
import NotificationListContainer from "../../containers/CenterPage/NotificationListContainer";
import '../../../scss/twitter-left-side.scss';
import '../../../scss/twitter-center-side.scss';
import NewsFeed from "./NewsFeed/NewsFeed";

const CenterPage = ({show, finishedLoading}) => {
    finishedLoading();
    return show && (
        <div id="centerPage" className="center-wrapper">
            <Switch>
                <Route path="/" exact component={NewsFeed}/>
                <Route path="/profile" exact component={ProfilePageContainer}/>
                <Route path="/profile/edit" component={EditProfilePageContainer}/>
                <Route path="/notifications" component={NotificationListContainer}/>
            </Switch>
        </div>
    );
};

export default CenterPage;
