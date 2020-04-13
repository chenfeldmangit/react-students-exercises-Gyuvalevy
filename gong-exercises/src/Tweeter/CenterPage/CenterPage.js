import React, {Component} from "react";
import '../../css/twitter-left-side.css';
import '../../css/twitter-center-side.css';
import TweeterLocalStorage from "./../TweeterLocalStorage";
import ProfilesLocalStorage from "../ProfilesLocalStorage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

class CenterPage extends Component {
    constructor(props) {
        super(props);
        this.props.changeLoading(false);

        ProfilesLocalStorage.populateLocalStorage();
        TweeterLocalStorage.populateLocalStorage();

        this.state = {
            tweetsList: TweeterLocalStorage.getTweets(),
            profile: ProfilesLocalStorage.getCurrentProfile(),
        }
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
            profileName: this.state.profile.name,
            profileMention: this.state.profile.mention,
            approved: this.state.profile.approved,
            profileImgSrc: this.state.profile.imgSrc,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: content,
        };

        this.appendTweet(newTweet);
    }

    render() {
        return (
            <div id="centerPage" className="center-wrapper">
                <HomePage
                    tweetsList={this.state.tweetsList}
                    sendTweet={(content) => this.createTweet(content)}
                    deleteTweet={this.deleteTweet}
                    addLike={this.addLike}
                    addRetweet={this.addRetweet}
                    addComment={this.addComment}
                />
                <ProfilePage profile={this.state.profile}/>
            </div>
        );
    }

}

export default CenterPage;
