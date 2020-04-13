const KEY_TWEETS = 'tweets';

class TweeterLocalStorage {
    static isLocalStorageExists = () => {
        return !!TweeterLocalStorage.getTweets();
    };

    static populateLocalStorage = () => {
        if (TweeterLocalStorage.isLocalStorageExists())
            return;

        let initialTweets = [
            {
                key: 1,
                profileId: 2,
                comments: 117,
                retweets: 31,
                likes: 300,
                postTime: '1h',
                postContent: 'הדגשתי שראוי לחברי הכנסת לשמש דוגמה לציבור בישראל ולהוכיח כי ניתן לתפקד גם בעת משבר, תוך הפגנת אחריות והקפדה על הוראות משרד הבריאות, בין אם בקיום ישיבות בשיחות וידאו או בפתרונות יצירתיים אחרים.',
            },
            {
                key: 2,
                profileId: 1,
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