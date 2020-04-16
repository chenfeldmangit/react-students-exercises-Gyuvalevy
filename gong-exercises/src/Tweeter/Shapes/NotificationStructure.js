import PropTypes from "prop-types";
import {NotificationAction} from "./NotificationAction";

export const NotificationStructure = PropTypes.shape({
    key: PropTypes.number.isRequired,
    action: NotificationAction.isRequired,
    byId: PropTypes.number.isRequired,
    tweetId: PropTypes.number,
});