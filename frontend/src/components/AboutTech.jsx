// src/components/AboutTech.jsx
import React from 'react';
import './AboutTech.css';

export default function AboutTech() {
  return (
    <section className="sobre-tech">
      <div className="contenedor sobre-tech-grid">
        <div className="texto-sobre-tech">
          <h2>Sobre los <span>TechPRO</span></h2>
          <p>
            Pellentesque faucibus eu turpis vel ornare. Suspendisse pellentesque ut tellus quis ullamcorper.
            Praesent sed mi id tortor ultrices cursus. Sed suscipit nibh nisi, vel elementum tellus lobortis sed.
          </p>
        </div>
        <div className="imagen-sobre-tech">
          <img src="/imagen-mujer.jpg" alt="Mujer usando tecnología" />
        </div>
      </div>
    </section>
  );
}
