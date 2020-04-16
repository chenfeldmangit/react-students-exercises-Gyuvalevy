import {useArrayStore} from "./ArrayStore";
import {useStore} from "./Store";

const KEY = 'profiles';
const KEY_CURRENT_PROFILE = 'current_profile';

let initialProfiles = [
    {
        id: 1,
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

export const useProfiles = () => {
    // eslint-disable-next-line no-unused-vars
    const [profiles, setProfiles, getProfileByKey, getProfileById, appendProfile, replaceProfileByKey, removeProfile]
        = useArrayStore(KEY, initialProfiles);

    return [profiles, setProfiles, getProfileById];
};

export const useCurrentProfile = () => {

    const [profiles, setProfiles] = useProfiles();
    const [currentProfileIndex, setCurrentProfileIndex] = useStore(KEY_CURRENT_PROFILE, 0)

    const currentProfile = profiles[currentProfileIndex];

    const switchProfile = () => {
        let index = currentProfileIndex + 1;
        if (index === profiles.length)
            index = 0;

        setCurrentProfileIndex(index);
    }

    const setCurrentProfile = (profile) => {
        let allProfiles = profiles.slice();
        allProfiles[currentProfile] = profile;
        setProfiles(allProfiles);
    };


    return [currentProfile, setCurrentProfile, switchProfile];
};
