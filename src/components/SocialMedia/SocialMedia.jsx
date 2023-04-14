import React from "react";

import "./SocialMedia.css";

function SocialMedia(props) {
    return(
        <div className="icons">
            <img src={"src/assets/" + props.image} alt="" />
            <a href="https://www.instagram.com/thepelezi/" target="_blank" className="at">
                <p>Instagram</p>
                <small>@thepelezi</small>
            </a>
        </div>
    );
}

export default SocialMedia;