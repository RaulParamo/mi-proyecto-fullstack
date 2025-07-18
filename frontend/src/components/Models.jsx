import React from 'react';
import './Models.css';

export default function Models() {
  return (
    <main className="contenedor modelos">
      <h2 className="text-center degradado-verde header-modelos">Elige tus TechPRO</h2>

      <div className="listado-modelos">
        <div className="modelo modelo-x">
          <div className="contenido-modelo">
            <h3>TechPRO X</h3>
            <p className="precio">$299</p>
          </div>
          <img src="/modelo-x.svg" alt="TechPRO X" className="modelo-imagen" />
        </div>

        <div className="modelo modelo-y">
          <div className="contenido-modelo">
            <h3>TechPRO Y</h3>
            <p className="precio">$399</p>
          </div>
          <img src="/modelo-y.svg" alt="TechPRO Y" className="modelo-imagen" />
        </div>

        <div className="modelo modelo-z">
          <div className="contenido-modelo">
            <h3>TechPRO Z</h3>
            <p className="precio">$499</p>
          </div>
          <img src="/modelo-z.svg" alt="TechPRO Z" className="modelo-imagen" />
        </div>
      </div>
    </main>
  );
}
