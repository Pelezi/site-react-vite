import React from "react";

import "./Info.css"

function Info(props) {

    const { resumo, experienciaAcademica, experienciaProfissional } = props.curriculo;

    if(!resumo || !experienciaAcademica || !experienciaProfissional) {
        return <p>Carregando...</p>
    }

    return (
        <>
            <section>
                <h1>Sobre mim</h1>
                <p> {resumo} </p>
            </section>

            <section>
                <h1>Acadêmico</h1>
                <ul>
                    {experienciaAcademica.map((item, index) => (
                        <li key={index}>
                            <b> ({item.anoInicio} - {item.anoFim}) </b> {item.titulo};
                        </li>
                    ))}
                    <p> <small>É meio complicado...</small> </p>
                </ul>
                
            </section>

            <section>
                <h1>Profissional</h1>
                <ul>
                    {experienciaProfissional.map((item, index) => (
                        <li key={index}>
                            <b> ({item.anoInicio} - {item.anoFim}) </b> {item.titulo};
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Info;