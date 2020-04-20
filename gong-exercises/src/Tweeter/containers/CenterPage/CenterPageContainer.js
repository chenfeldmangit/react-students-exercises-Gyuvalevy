import React, {useEffect} from 'react';
import '../../../scss/twitter-left-side.scss';
import '../../../scss/twitter-center-side.scss';
import NewsFeed from "./../../components/CenterPage/NewsFeed/NewsFeed";
import ProfilePage from "./../../components/CenterPage/Profile/ProfilePage";
import EditProfilePage from "./../../components/CenterPage/Profile/EditProfilePage";
import CenterPage from "./../../components/CenterPage/CenterPage";
import NotificationListContainer from "./Notification/NotificationListContainer";
import {useNotifications} from "../../Stores/NotificationStore";
import {useProfiles} from "../../Stores/ProfileStore";
import {useTweets} from "../../Stores/TweetStore";

const CenterPageContainer = (props) => {
    const [notificationsList] = useNotifications();
    const [tweets, getTweetByKey, appendTweet, replaceTweetByKey, removeTweet] = useTweets();

    // eslint-disable-next-line no-unused-vars
    const [profiles, setProfiles, getProfileById] = useProfiles();

    useEffect(() => {
        props.changeLoading(false);
    }, [tweets]);

    const getTweetContent = (tweetKey) => getTweetByKey(tweetKey).postContent;

    const createTweet = (content) => {
        let now = new Date();
        const newTweet = {
            key: Math.floor(Math.random() * 100000),
            profileId: props.profile.id,
            comments: 0,
            retweets: 0,
            likes: 0,
            postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
            postContent: content,
        };

        appendTweet(newTweet);
    };

    const renderNewsFeedPageComponent = () => {
        return () => (
            <NewsFeed
                tweetsList={tweets}
                getProfileInformation={getProfileById}
                sendTweet={(content) => createTweet(content)}
                replaceTweet={replaceTweetByKey}
                deleteTweet={removeTweet}
            />
        );
    };

    const renderProfileComponent = () => {
        return () => (
            <ProfilePage profile={props.profile}/>
        );
    };

    const renderEditProfileComponent = () => {
        return () => (
            <EditProfilePage profile={props.profile} save={props.saveProfile}/>
        );
    };

    const renderNotificationListComponent = () => {
        return () => (
            <NotificationListContainer
                notifications={notificationsList}
                getProfileInformation={getProfileById}
                getTweetContent={getTweetContent}
            />
        );
    };

    return props.show
        ? (<CenterPage
                renderEditProfileComponent={renderEditProfileComponent}
                renderNewsFeedPageComponent={renderNewsFeedPageComponent}
                renderProfileComponent={renderProfileComponent}
                renderNotificationListComponent={renderNotificationListComponent}
            />
        )
        : (<></>);
};

export default CenterPageContainer;
