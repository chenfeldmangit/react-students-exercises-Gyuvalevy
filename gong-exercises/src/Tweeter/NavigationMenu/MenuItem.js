import React from "react";
import {Link} from 'react-router-dom';

import '../../sass/twitter-left-side.sass';

const MenuItem = (props) => {
    const menuItem = <div onClick={props.onClick} id={props.id} className={props.className}>
        {
            props.imageSrc
                ? (<i><img className="profile-picture" src={props.imageSrc} alt="profile"/></i>)
                : (<i/>)
        }
        {props.text && <span>{props.text}</span>}
    </div>;

    return props.link
        ? (<Link to={props.link}>{menuItem}</Link>)
        : menuItem;
};

MenuItem.defaultProps = {
    onClick : () => {},
    id: '',
}

export default MenuItem;
