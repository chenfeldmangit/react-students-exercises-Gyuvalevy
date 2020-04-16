import LocalStorageBasics from "./LocalStorageBasics";

const KEY = 'tweets';

const getAll = LocalStorageBasics.getItems(KEY);
const getByKey = LocalStorageBasics.getItemByKey(KEY);
const setAll = LocalStorageBasics.setItems(KEY);
const append = LocalStorageBasics.appendItems(KEY);
const remove = LocalStorageBasics.removeItem(KEY);
const replace = LocalStorageBasics.replaceItemByKey(KEY);

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

        setAll(initialTweets);
    };

    static appendTweet = (newTweet) => append(newTweet);

    static getTweets = () => getAll();

    static getTweetByKey = (tweetKey) => getByKey(tweetKey);

    static replaceTweetByKey = (tweet) => replace(tweet);

    static removeTweet = (tweet) => remove(tweet);

    static getKeyTweets = () => {
        return KEY
    };
}

export default TweeterLocalStorage;