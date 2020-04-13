const KEY_TWEETS = 'tweets';

class TweeterLocalStorage {
    static populateLocalStorage = () => {
        let initialTweets = [
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

        localStorage.setItem(KEY_TWEETS, JSON.stringify(initialTweets))
    };

    // append to start
    static appendTweet = (newTweet) => {
        let tweets = JSON.parse(localStorage.getItem(KEY_TWEETS));
        tweets.splice(0, 0, newTweet);
        localStorage.setItem(KEY_TWEETS, JSON.stringify(tweets));
    };

    static getTweets = () => {
        return JSON.parse(localStorage.getItem(KEY_TWEETS));
    };

    static replaceTweetByKey = (tweet) => {
        let tweets = JSON.parse(localStorage.getItem(KEY_TWEETS));
        let tweetIndex = tweets.findIndex(value => value.key === tweet.key);
        tweets[tweetIndex] = tweet;
        localStorage.setItem(KEY_TWEETS, JSON.stringify(tweets));
    };

    static removeTweet = (tweet) => {
        let tweets = JSON.parse(localStorage.getItem(KEY_TWEETS));
        let index = tweets.findIndex(value => value.key === tweet.key);
        tweets.splice(index, 1);

        localStorage.setItem(KEY_TWEETS, JSON.stringify(tweets));
    };

    static getKeyTweets = () => {
        return KEY_TWEETS
    };

}

export default TweeterLocalStorage;