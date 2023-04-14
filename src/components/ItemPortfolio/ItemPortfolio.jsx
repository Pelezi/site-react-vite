import React from "react";

import "./ItemPortfolio.css";

function ItemPortfolio(props) {
    return(
        <div className="item-portfolio">
            <a href={props.link} target="_blank" >
                <img src={"src/assets/" + props.image} alt="A Giant TARDIS built in minecraft" />
                <p>{props.title}</p>
                <small>{props.description}</small>
            </a>
         </div>
    );
}

export default ItemPortfolio;