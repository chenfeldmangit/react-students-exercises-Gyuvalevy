import React, {Component} from "react";
import '../../css/twitter-left-side.css';
import TweetsList from "./TweetsList";
import AddTweet from "./AddTweet";
import '../../css/twitter-center-side.css';

let tweets = [
    {
        key: 1,
        profileName: "Benny Gantz",
        profileMention: "gantzbe",
        approved: true,
        profileImgSrc: 'https://pbs.twimg.com/profile_images/1156850474110345216/FWeRQirQ_bigger.jpg',
        comments: 117,
        retweets: 31,
        likes: 300,
        postTime: '1h',
        postContent: 'הדגשתי שראוי לחברי הכנסת לשמש דוגמה לציבור בישראל ולהוכיח כי ניתן לתפקד גם בעת משבר, תוך הפגנת אחריות והקפדה על הוראות משרד הבריאות, בין אם בקיום ישיבות בשיחות וידאו או בפתרונות יצירתיים אחרים.',
    },
    {
        key: 2,
        profileName: "Yuval Levy",
        profileMention: "yuvalevy",
        approved: false,
        profileImgSrc: 'https://lh3.googleusercontent.com/-gJS19so4rY4/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nB49lJKdInn1oTmsEQ5pA5HC8OlCw.CMID/s83-c/photo.jpg',
        comments: 117,
        retweets: 31,
        likes: 300,
        postTime: '2h',
        postContent: 'HALAS Corona! מה יהיה!?!',
    },
]

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
        this.state = {tweetsList: tweets}
    }

    tweetAddLike = (tweetKey) =>
        () => {
            const tweets = this.state.tweetsList;
            let tweetIndex = tweets.findIndex((value, index) => value.key === tweetKey);
            tweets[tweetIndex].likes++;
            this.setState({tweetsList: tweets});
        }


    tweetAddComment = (tweetKey) =>
        () => {
            const tweets = this.state.tweetsList;
            let tweetIndex = tweets.findIndex((value, index) => value.key === tweetKey);
            tweets[tweetIndex].comments++;
            this.setState({tweetsList: tweets});
        }

    tweetAddRetweet = (tweetKey) =>
        () => {
            const tweets = this.state.tweetsList;
            let tweetIndex = tweets.findIndex((value, index) => value.key === tweetKey);
            tweets[tweetIndex].retweets++;
            this.setState({tweetsList: tweets});
        }


    createTweet(content) {
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

        const tweets = this.state.tweetsList;
        tweets.splice(0, 0, newTweet);
        this.setState({tweetsList: tweets});
    }

    render() {
        return (
            <div id="centerPage" className="center-wrapper">
                <div id="homepageCenter" className="center-container">
                    <div className="title">Home</div>
                    <AddTweet sendTweet={(content) => this.createTweet(content)}/>
                    <TweetsList
                        tweets={this.state.tweetsList}
                        tweetAddLike={this.tweetAddLike}
                        tweetAddComment={this.tweetAddComment}
                        tweetAddRetweet={this.tweetAddRetweet}
                    />
                </div>
            </div>
        );
    }

}

export default CenterPage;
