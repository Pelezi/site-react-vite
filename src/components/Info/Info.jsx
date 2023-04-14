import React from "react";

import "./Info.css"
import data from "./Info.json";

function Info() {

    return (
        <>
            <section>
                <h1>Sobre mim</h1>
                <p> {data.about} </p>
            </section>

            <section>
                <h1>Acadêmico</h1>
                <ul>
                    {data.academico.map((item, index) => (
                        <li key={index}>
                            <b> ({item.dataInicio} - {item.dataFim}) </b> {item.titulo};
                        </li>
                    ))}
                    <p> <small>É meio complicado...</small> </p>
                </ul>
                
            </section>

            <section>
                <h1>Profissional</h1>
                <ul>
                    {data.profissional.map((item, index) => (
                        <li key={index}>
                            <b> ({item.dataInicio} - {item.dataFim}) </b> {item.titulo};
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Info;