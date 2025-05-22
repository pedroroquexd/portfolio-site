// src/components/Habilidades.jsx
import React from 'react';
import './Habilidades.css';

function Habilidades() {
  const habilidadesCategorizadas = [
    {
      categoria: 'Linguagens & Ferramentas',
      icon: 'fas fa-code', // Ícone de código
      itens: [
        { nome: 'Python', nivel: 90 }, // Nível de 0 a 100
        { nome: 'SQL (PostgreSQL, MySQL)', nivel: 95 },
        { nome: 'R', nivel: 60 },
        { nome: 'Git & GitHub', nivel: 85 },
        { nome: 'Excel Avançado', nivel: 90 }
      ]
    },
    {
      categoria: 'Visualização & BI',
      icon: 'fas fa-chart-pie', // Ícone de gráfico de pizza
      itens: [
        { nome: 'Power BI', nivel: 90 },
        { nome: 'Tableau', nivel: 75 },
        { nome: 'Matplotlib & Seaborn', nivel: 80 },
        { nome: 'Streamlit', nivel: 65 }
      ]
    },
    {
      categoria: 'Estatística & Machine Learning',
      icon: 'fas fa-brain', // Ícone de cérebro ou algo estatístico
      itens: [
        { nome: 'Estatística Descritiva/Inferencial', nivel: 85 },
        { nome: 'Testes de Hipóteses', nivel: 80 },
        { nome: 'Regressão Linear/Logística', nivel: 70 },
        { nome: 'Clusterização (K-Means)', nivel: 60 }
      ]
    },
    {
        categoria: 'Conceitos & Outros',
        icon: 'fas fa-rocket', // Ícone de foguete (astrofísica!)
        itens: [
          { nome: 'Modelagem de Dados', nivel: 80 },
          { nome: 'ETL & Manipulação de Dados', nivel: 90 },
          { nome: 'Análise de Dados Espaciais', nivel: 50 }, // Exemplo de um nicho
          { nome: 'Fundamentos de Astrofísica', nivel: 70 } // Seu interesse
        ]
    }
  ];

  return (
    <section id="habilidades" className="habilidades-section">
      <h2>Minhas Habilidades <i className="fas fa-tools"></i></h2> {/* Ícone geral de ferramentas */}
      <div className="habilidades-categorias-grid">
        {habilidadesCategorizadas.map((categoria, index) => (
          <div key={index} className="habilidades-categoria-card">
            <h3><i className={categoria.icon}></i> {categoria.categoria}</h3>
            <ul className="habilidades-list">
              {categoria.itens.map((habilidade, idx) => (
                <li key={idx} className="habilidade-item">
                  <span className="habilidade-nome">{habilidade.nome}</span>
                  <div className="habilidade-nivel-barra">
                    <div className="habilidade-nivel-progresso" style={{ width: `${habilidade.nivel}%` }}></div>
                  </div>
                  <span className="habilidade-nivel-porcentagem">{habilidade.nivel}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;