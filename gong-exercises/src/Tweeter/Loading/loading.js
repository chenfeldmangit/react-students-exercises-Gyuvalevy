import React from "react";
// import '../../css/twitter-left-side.css';

const Loading = ({show}) => {
    return (
        <>
            {show
            && (
                <div id="loadingCenter" className="center-wrapper">
                    <img src="https://i.gifer.com/4V0b.gif" alt="loading..."/>
                </div>
            )
            }
        </>
    );
};

export default Loading;