const KEY_PROFILES = 'profiles';
let CURRENT_INDEX = 0;
let PROFILES_COUNT = 0;

class ProfilesLocalStorage {
    static isLocalStorageExists = () => {
        return !!ProfilesLocalStorage.getProfiles();
    };

    static populateLocalStorage = () => {
        if (ProfilesLocalStorage.isLocalStorageExists())
            return;

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
            }
        ];

        localStorage.setItem(KEY_PROFILES, JSON.stringify(profilesInfo))
    };

    static getProfiles = () => {
        let profiles = JSON.parse(localStorage.getItem(KEY_PROFILES));
        PROFILES_COUNT = profiles ? profiles.length : 0;
        return profiles;
    };

    static getCurrentProfile = () => {
        return ProfilesLocalStorage.getProfiles()[CURRENT_INDEX];
    };

    static switchProfile() {
        CURRENT_INDEX++;
        if (CURRENT_INDEX === PROFILES_COUNT)
            CURRENT_INDEX = 0;
    }

    static setCurrentProfile(profile) {
        let profiles = JSON.parse(localStorage.getItem(KEY_PROFILES));
        profiles[CURRENT_INDEX] = profile;
        localStorage.setItem(KEY_PROFILES, JSON.stringify(profiles));
    };

    static getKeyProfiles = () => {
        return KEY_PROFILES
    };
}

export default ProfilesLocalStorage;