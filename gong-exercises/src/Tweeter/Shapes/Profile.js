import PropTypes from "prop-types";

export const Profile = PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

    name: PropTypes.string.isRequired,
    mention: PropTypes.string.isRequired,
    approved: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    homelink: PropTypes.string.isRequired,
    following: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
})