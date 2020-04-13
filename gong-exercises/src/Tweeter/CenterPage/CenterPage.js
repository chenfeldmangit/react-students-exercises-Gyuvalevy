import React, {Component} from "react";
import '../../css/twitter-left-side.css';
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../css/twitter-center-side.css';
import TweeterLocalStorage from "./../TweeterLocalStorage";
import HomePage from "./HomePage";

const profilesInfo = [
    {
        name: "Yuval Levy",
        mention: "yuvalevy",
        approved: false,
        description: "Welcome to my profile! I am Yuval",
        address: "Tel Aviv",
        homelink: "yuvalevy.com",
        following: 231,
        followers: 155,
        imgSrc: 'https://lh3.googleusercontent.com/-gJS19so4rY4/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nB49lJKdInn1oTmsEQ5pA5HC8OlCw.CMID/s83-c/photo.jpg',
    },
    {
        name: "Benny Gantz",
        approved: true,
        mention: "gantzbe",
        description: "נשוי לרויטל ואבא ל-4 ילדים. הרמטכ\"ל ה- 20 של צה\"ל \n" +
            ". יו\"ר \"כחול לבן\" \n",
        imgSrc: 'https://pbs.twimg.com/profile_images/1156850474110345216/FWeRQirQ_bigger.jpg',
        address: "Tel Aviv",
        homelink: "beni.com",
        following: 23,
        followers: 1000,
    }];

let profile = profilesInfo[0];

class CenterPage extends Component {
    constructor(props) {
        super(props);
        this.props.changeLoading(false);
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
            profileName: profile.name,
            profileMention: profile.mention,
            approved: profile.approved,
            profileImgSrc: profile.imgSrc,
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
            </div>
        );
    }

}

export default CenterPage;
