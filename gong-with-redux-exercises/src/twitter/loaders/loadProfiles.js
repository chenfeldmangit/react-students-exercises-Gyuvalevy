import LocalStorageBasics from "./LocalStorageBasics";

const KEY = 'profiles';
const setAll = LocalStorageBasics.setItems(KEY);
const getAll = LocalStorageBasics.getItems(KEY);
const replaceById = LocalStorageBasics.replaceItemById(KEY);

const profilesInfo = [
    {
        id: 1,
        username: "yuvalevy",
        password: "yuvalevy",
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
        id: 2,
        username: "benny",
        password: "benny",
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
    }
];

function populateLocalStorage() {
    setAll(profilesInfo);
    return profilesInfo;
}

export function getProfiles() {
    let all = getAll();
    if (!all)
        all = populateLocalStorage();
    return all;
}

export function replaceProfileById(profile) {
    replaceById(profile);
}