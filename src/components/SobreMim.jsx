// src/components/SobreMim.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './SobreMim.css';

// Se você for usar uma foto sua
// import minhaFoto from '../assets/sua-foto.jpg'; // Descomente esta linha se você importava uma foto

function SobreMim() {
  return (
    <section id="sobre-mim" className="sobre-mim-section">
      <div className="profile-intro">
        {/* REMOVA OU COMENTE A LINHA DA FOTO AQUI */}
        {/* <img src="/perfil_astro_data.png" alt="Sua Foto de Perfil" className="profile-photo" /> */}

        <h1>Olá, eu sou o <span className="highlight-name">Pedro Roque</span>.</h1>
        <h2>
          <span className="typed-text-container">
            <TypeAnimation
              sequence={[
                'Analista de Dados',
                1000,
                'Bacharelando em Estatística',
                1000,
                'Especlialista em E-Commerce',
                1000,
                'Entusiasta de Astrofísica',
                1000,
                'Apaixonado por Ensinar e Aprender',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>

        {/* Links sociais */}
        <div className="social-links">
          <a href="https://linkedin.com/in/spedroroquexd" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/pedroroquexd" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Adicione outros links */}
        </div>
      </div>
    </section>
  );
}

export default SobreMim;