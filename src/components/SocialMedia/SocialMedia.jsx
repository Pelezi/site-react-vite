import React from "react";

import "./SocialMedia.css";

function SocialMedia(props) {
    return(
        <div className="icons">
            <img src={"src/assets/" + props.name + ".png"} alt="" />
            <a href={props.link} target="_blank" className="at">
                <p>{props.name}</p>
                <small> {props.userName} </small>
            </a>
        </div>
    );
}

export default SocialMedia;