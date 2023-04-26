import React, { useEffect, useState } from 'react';

import api from './api';

import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Bio from './components/Bio/Bio';
import Info from './components/Info/Info';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [informacoes, setInformacoes] = useState({});
  const [curriculo, setCurriculo] = useState({});
  const [portfolio, setPortfolio] = useState([]);

  const fetchDados = async () => {
    try {
      const informacoes = await api.get('/informacoes/1');
      setInformacoes({
        foto: informacoes.data.foto,
        nome: informacoes.data.nome,
        cargo: informacoes.data.cargo,
      });

      const experienciaAcademica = await api.get('/experiencias?tipo=academico');
      const experienciaProfissional = await api.get('/experiencias?tipo=profissional');

      setCurriculo({
        resumo: informacoes.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data,
      });

      const portfolio = await api.get('/portfolio');
      setPortfolio(portfolio.data);

    } catch (error) {
      console.log('Erro ao buscar dados', error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>

      <BrowserRouter>
        <Header></Header>
        <Bio informacoes={informacoes}></Bio>
        <Routes>
          <Route index element={< Info curriculo={curriculo} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App;
