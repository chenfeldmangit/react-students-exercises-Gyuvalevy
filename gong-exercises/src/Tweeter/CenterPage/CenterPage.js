import React, {useEffect, useState} from "react";
import {Switch, Route} from 'react-router-dom';
import '../../scss/twitter-left-side.scss';
import '../../scss/twitter-center-side.scss';
import TweeterLocalStorage from "./../TweeterLocalStorage";
import ProfilesLocalStorage from "../ProfilesLocalStorage";
import NewsFeed from "./NewsFeed/NewsFeed";
import ProfilePage from "./Profile/ProfilePage";
import EditProfilePage from "./Profile/EditProfilePage";

const CenterPage = (props) => {
    const [tweetsList, setTweetsList] = useState(TweeterLocalStorage.getTweets());

    useEffect(() => {
        ProfilesLocalStorage.populateLocalStorage();
        TweeterLocalStorage.populateLocalStorage();
    }, []);

    useEffect(() => {
        props.changeLoading(false);
    }, [tweetsList]);

    const getProfileInformation = (profileId) => ProfilesLocalStorage.getProfileById(profileId);

    const replaceTweet = (newTweet) => {
        props.changeLoading(true);
        TweeterLocalStorage.replaceTweetByKey(newTweet);

        const newTweets = tweetsList.slice();
        const tweetIndex = newTweets.findIndex(value => value.key === newTweet.key);
        newTweets[tweetIndex] = newTweet;
        setTweetsList(newTweets);
    };

    const appendTweet = (newTweet) => {
        TweeterLocalStorage.appendTweet(newTweet);

        const tweets = tweetsList.slice();
        tweets.splice(0, 0, newTweet);
        setTweetsList(tweets);
    };

    const deleteTweet = (tweet) => {
        TweeterLocalStorage.removeTweet(tweet);

        const tweets = tweetsList.slice();
        let index = tweets.findIndex(value => value.key === tweet.key);
        tweets.splice(index, 1);
        setTweetsList(tweets);
    };

    const createTweet = (content) => {
        let now = new Date();
        const newTweet = {
            key: Math.floor(Math.random() * 100000),
            profileId: props.profile.id,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: content,
        };

        appendTweet(newTweet);
    };

    const renderNewsFeedPageComponent = () => {
        return () => (
            <NewsFeed
                tweetsList={tweetsList}
                getProfileInformation={getProfileInformation}
                sendTweet={(content) => createTweet(content)}
                replaceTweet={replaceTweet}
                deleteTweet={deleteTweet}
            />
        );
    };

    const renderProfileComponent = () => {
        return () => (
            <ProfilePage profile={props.profile}/>
        );
    };

    const renderEditProfileComponent = () => {
        return () => (
            <EditProfilePage profile={props.profile} save={props.saveProfile}/>
        );
    };

    return props.show
        ? (<div id="centerPage" className="center-wrapper">
                <Switch>
                    <Route path="/" exact component={renderNewsFeedPageComponent()}/>
                    <Route path="/profile" exact component={renderProfileComponent()}/>
                    <Route path="/profile/edit" component={renderEditProfileComponent()}/>
                </Switch>
            </div>
        )
        : (<></>);
};

export default CenterPage;
