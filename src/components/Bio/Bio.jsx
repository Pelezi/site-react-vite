import React from "react";
import avatar from "../../assets/Alex.jpg"

function Bio() {
    return (
        <div className="bio">
            <img src={avatar} alt="A picture of me" />
            <div className="realbio">
                <h1>Alessandro Cardoso</h1>
                <h3>Nerd profissioal</h3>
                <h3>Desenvolvedor de software nas horas vagas</h3>
                <h3>especialista em viagem no tempo</h3>
            </div>
        </div>
    )
}

export default Bio;