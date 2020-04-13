import React from "react";
import '../../css/twitter-left-side.css';

const MenuItem = (props) => {
    return (
        <>
            <div onClick={props.onClick ? props.onClick : () => {}}
                id={props.id ? props.id : ''}
                className={props.className}>
                {
                    props.imageSrc
                        ? (<i><img className="profile-picture" id="profileImage" src={ props.imageSrc } alt="profile"/></i>)
                        : (<i/>)
                }
                {props.text && <span>{props.text}</span>}
            </div>
        </>
    );
};

export default MenuItem;
