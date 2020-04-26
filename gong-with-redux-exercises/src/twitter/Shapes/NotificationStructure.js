import PropTypes, {arrayOf} from "prop-types";
import {NotificationAction} from "./NotificationAction";

export const NotificationStructure = PropTypes.shape({
    key: PropTypes.number.isRequired,
    action: NotificationAction.isRequired,
    byId: arrayOf(PropTypes.number).isRequired,
    tweetId: PropTypes.number,
});