// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Vamos criar este arquivo de CSS depois

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;