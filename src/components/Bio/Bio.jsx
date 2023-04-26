import React from "react";

import "./Bio.css";

function Bio(props) {

    const { nome, cargo, foto } = props.informacoes;

    return (
        <div className="bio">
            <img src={foto} alt="A picture of me" />
            <div className="realbio">
                <h1 id="nome-perfil">{nome}</h1>
                <h3 id="eventoSubtitulo">{cargo}</h3>
            </div>
        </div>
    )
}

export default Bio;