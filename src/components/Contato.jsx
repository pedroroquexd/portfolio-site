// src/components/Contato.jsx
import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato-section">
      <h2>Contato</h2>
      <p>Ficaria feliz em discutir oportunidades ou projetos!</p>
      <p>Você pode me encontrar em:</p>
      <ul>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/pedroroquexd" target="_blank" rel="noopener noreferrer">linkedin.com/in/pedroroquexd</a></li>
        <li>GitHub: <a href="https://github.com/pedroroquexd" target="_blank" rel="noopener noreferrer">github.com/pedroroquexd</a></li>
      </ul>
      {/* Ou adicione um formulário de contato mais complexo aqui */}
    </section>
  );
}

export default Contato;