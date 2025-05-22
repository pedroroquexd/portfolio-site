// src/App.jsx
import React from 'react';
import Header from './components/Header';
import SobreMim from './components/SobreMim';
import Projetos from './components/Projetos';
import Habilidades from './components/Habilidades';
import Contato from './components/Contato';
import Footer from './components/Footer'; // Importando o Footer também

import './App.css'; // Para estilos globais da aplicação

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SobreMim />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;