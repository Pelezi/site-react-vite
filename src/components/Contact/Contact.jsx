import React, { useState } from "react";

import SocialMedia from "../SocialMedia/SocialMedia";

import "./Contact.css";
import socialMedia from "./SocialMedia.json";

function Contact() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    function enviarFormulario(event) {
        event.preventDefault();
        console.log("Never gonna give you up");
        
        const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;

        const numeroWhatsapp = process.env.VITE_WHATSAPP_NUMBER;

        //const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;
        const linkWhatsapp = `https://api.whatsapp.com/send/?phone=${numeroWhatsapp}&text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsapp, '_blank');


    }



    return (
        <main>
            <h1>Contato</h1>

            <div className="info">
                    <div className="contact">
                        <form onSubmit={enviarFormulario}>
                            <h3>Me mande uma mensagem</h3>

                            <fieldset>
                                <label htmlFor="input-home">Nome</label>
                                <input 
                                    type="text" 
                                    name="input-nome" 
                                    id="input-nome" 
                                    required 
                                    minLength="2" 
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="input-email">E-mail</label>
                                <input 
                                    type="email" 
                                    name="input-email" 
                                    id="input-email" 
                                    required 
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="input-tel">Telefone</label>
                                <input 
                                    type="tel" 
                                    name="input-tel" 
                                    id="input-tel" 
                                    placeholder="(xx) xxxxx-xxxx" 
                                    required pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                                    maxLength="15" 
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </fieldset>

                            <fieldset>
                                <label htmlFor="input-message">Mensagem</label>
                            <textarea 
                                name="input-message" 
                                id="input-message" 
                                cols="10" 
                                rows="25"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            ></textarea>
                            </fieldset>
                            <center>
                                <input type="submit" value="enviar" className="button" />
                            </center>
                            
                        </form>
                    </div>

                    <div className="socialmedia">
                        <h3>Outros meios de contato</h3>

                        {socialMedia.map((item, index) => 
                            <SocialMedia
                                key={index}
                                name={item.name}
                                userName={item.userName}
                                link={item.link}
                            ></SocialMedia>
                        )}
                        
                    </div>
            </div>

            
        </main>
    )
}

export default Contact;