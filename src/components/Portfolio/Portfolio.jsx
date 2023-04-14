import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";
import portfolio from "./Portfolio.json"

function Portfolio() {

    return (
        <main>
            <h1>Portfolio</h1>

            {portfolio.map((item, index) => 
                    <ItemPortfolio
                        key={index}
                        link={item.link}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    ></ItemPortfolio>
            )}

        </main>
    )
}

export default Portfolio;