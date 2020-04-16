import {useArrayStore} from "./ArrayStore";

const KEY = 'tweets';

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
];

export const useTweets = () => {
    // eslint-disable-next-line no-unused-vars
    const [tweets, setTweets, getTweetByKey, getTweetById, appendTweet, replaceTweetByKey, removeTweet]
        = useArrayStore(KEY, initialTweets);

    return [tweets, getTweetByKey, appendTweet, replaceTweetByKey, removeTweet];
};
