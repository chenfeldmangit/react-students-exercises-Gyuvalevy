import React from "react";
import '../../sass/twitter-left-side.sass';

const MenuItem = (props) => {
    return (
        <>
            <div onClick={props.onClick ? props.onClick : () => {}}
                id={props.id ? props.id : ''}
                className={props.className}>
                {
                    props.imageSrc
                        ? (<i><img className="profile-picture" src={ props.imageSrc } alt="profile"/></i>)
                        : (<i/>)
                }
                {props.text && <span>{props.text}</span>}
            </div>
        </>
    );
};

export default MenuItem;
