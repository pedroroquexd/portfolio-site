// src/components/Projetos.jsx
import React from 'react';
import './Projetos.css';
// Se você já configurou o Font Awesome globalmente em main.jsx, não precisa importar aqui.
// Mas se quiser usar a forma de componente, você importaria:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartBar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: 'Análise de Vendas de E-commerce',
      descricao: 'Projeto de ponta a ponta: ETL, análise de dados de vendas e comportamento do cliente. Insights para otimização de estratégias comerciais.',
      ferramentas: ['Python (Pandas, Matplotlib)', 'SQL', 'Excel'],
      link: 'https://github.com/seunome/projeto-ecommerce'
    },
    {
      id: 2,
      titulo: 'Dashboard de Marketing Interativo',
      descricao: 'Criação de um dashboard dinâmico para monitorar KPIs de campanhas de marketing e visualização do ROI em tempo real.',
      ferramentas: ['Power BI', 'SQL Server', 'Excel'],
      link: 'https://github.com/seunome/dashboard-marketing'
    },
    {
      id: 3,
      titulo: 'Previsão de Séries Temporais (Vendas)',
      descricao: 'Aplicação de modelos de séries temporais para prever futuras vendas, auxiliando na gestão de estoque e planejamento estratégico.',
      ferramentas: ['Python (Statsmodels, Scikit-learn)', 'Jupyter'],
      link: 'https://github.com/seunome/previsao-vendas'
    },
    {
        id: 4,
        titulo: 'Análise de Sentimentos em Redes Sociais',
        descricao: 'Coleta e análise de dados de mídias sociais para identificar o sentimento do público sobre um produto ou marca específica.',
        ferramentas: ['Python (NLTK, Tweepy)', 'Pandas'],
        link: 'https://github.com/seunome/analise-sentimento'
    }
    // Adicione mais projetos aqui seguindo o mesmo formato
  ];

  return (
    <section id="projetos" className="projetos-section">
      {/* Se o Font Awesome estiver configurado globalmente em main.jsx, você pode usar <i> */}
      <h2>Meus Projetos <i className="fas fa-chart-bar"></i></h2> 
      {/* Ou, se preferir usar o componente FontAwesomeIcon (menos propenso a erros de renderização) */}
      {/* <h2>Meus Projetos <FontAwesomeIcon icon={faChartBar} /></h2> */}

      <div className="projetos-grid">
        {projetos.map(projeto => (
          <div key={projeto.id} className="projeto-card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="projeto-ferramentas">
              {projeto.ferramentas.map((ferramenta, index) => (
                <span key={index} className="ferramenta-tag">{ferramenta}</span>
              ))}
            </div>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn-projeto">
              Ver Projeto {/* Ícone aqui também se usar Font Awesome */}
              {/* <i className="fas fa-external-link-alt"></i> */}
              {/* Ou <FontAwesomeIcon icon={faExternalLinkAlt} /> */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;