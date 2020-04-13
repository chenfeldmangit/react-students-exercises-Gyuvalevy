import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import '../../sass/twitter-left-side.sass';
import '../../sass/twitter-center-side.sass';
import TweeterLocalStorage from "./../TweeterLocalStorage";
import ProfilesLocalStorage from "../ProfilesLocalStorage";
import HomePage from "./Homepage/HomePage";
import ProfilePage from "./Profile/ProfilePage";
import EditProfilePage from "./Profile/EditProfilePage";

class CenterPage extends Component {
    constructor(props) {
        super(props);
        this.props.changeLoading(false);

        ProfilesLocalStorage.populateLocalStorage();
        TweeterLocalStorage.populateLocalStorage();

        this.state = {tweetsList: TweeterLocalStorage.getTweets()}
    }

    replaceTweet(newTweet) {
        TweeterLocalStorage.replaceTweetByKey(newTweet);

        const newTweets = this.state.tweetsList;
        const tweetIndex = newTweets.findIndex(value => value.key === newTweet.key);
        newTweets[tweetIndex] = newTweet;
        this.setState({tweetsList: newTweets});
    }

    appendTweet(newTweet) {
        TweeterLocalStorage.appendTweet(newTweet);

        const tweets = this.state.tweetsList;
        tweets.splice(0, 0, newTweet);
        this.setState({tweetsList: tweets});
    }

    deleteTweet = (tweet) => {
        TweeterLocalStorage.removeTweet(tweet);
        const tweets = this.state.tweetsList;
        let index = tweets.findIndex(value => value.key === tweet.key);
        tweets.splice(index, 1);

        this.setState({tweetsList: tweets});
    }

    addLike = (tweet) => {
        const newTweet = tweet;
        newTweet.likes++;
        this.replaceTweet(newTweet);
    }

    addComment = (tweet) => {
        const newTweet = tweet;
        newTweet.comments++;
        this.replaceTweet(newTweet);
    }

    addRetweet = (tweet) => {
        const newTweet = tweet;
        newTweet.retweets++;
        this.replaceTweet(newTweet);
    }

    createTweet = (content) => {
        let now = new Date();
        const newTweet = {
            key: Math.floor(Math.random() * 100000),
            profileName: this.props.profile.name,
            profileMention: this.props.profile.mention,
            approved: this.props.profile.approved,
            profileImgSrc: this.props.profile.imgSrc,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: content,
        };

        this.appendTweet(newTweet);
    }

    getHomePageComponent() {
        return () => (
            <HomePage
                tweetsList={this.state.tweetsList}
                sendTweet={(content) => this.createTweet(content)}
                deleteTweet={this.deleteTweet}
                addLike={this.addLike}
                addRetweet={this.addRetweet}
                addComment={this.addComment}
            />
        );
    }

    getProfileComponent() {
        return () => (
            <ProfilePage profile={this.props.profile}/>
        );
    }

    getEditProfileComponent() {
        return () => (
            <EditProfilePage profile={this.props.profile} save={this.props.saveProfile}/>
        );
    }

    render() {
        return (
                <div id="centerPage" className="center-wrapper">
                    <Switch>
                        <Route path="/" exact component={this.getHomePageComponent()}/>
                        <Route path="/profile" exact component={this.getProfileComponent()}/>
                        <Route path="/profile/edit" component={this.getEditProfileComponent()}/>
                    </Switch>
                </div>
        );
    }
}

export default CenterPage;
