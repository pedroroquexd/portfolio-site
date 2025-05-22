// src/components/Header.jsx
import React from 'react';
import './Header.css'; // Importa o CSS do Header

function Header() {
  return (
    <header className="header">
      <nav className="nav"> {/* Adicionei a tag <nav> e a classe "nav" */}
        <ul className="nav-list"> {/* A lista de navegação com a classe "nav-list" */}
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;