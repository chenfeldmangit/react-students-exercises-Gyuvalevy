import LocalStorageBasics from "./LocalStorageBasics";

const KEY = 'tweets';
const setAll = LocalStorageBasics.setItems(KEY);
const getAll = LocalStorageBasics.getItems(KEY);

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

function populateLocalStorage() {
    setAll(initialTweets);
    return initialTweets;
}

export function getTweets() {
    let all = getAll();
    if (!all)
        all = populateLocalStorage();
    return all;
}


export function setTweets(tweets) {
    setAll(tweets);
}


