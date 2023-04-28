import React from "react";

import Instagram from "../../assets/Instagram.png";

import "./SocialMedia.css";

function SocialMedia(props) {
    return(
        <div className="icons">
            <img src={Instagram} alt="" />
            <a href={props.link} target="_blank" className="at">
                <p>{props.name}</p>
                <small> {props.userName} </small>
            </a>
        </div>
    );
}

export default SocialMedia;