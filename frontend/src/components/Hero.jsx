// frontend/src/components/Hero.jsx

import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <img
        src="/header.png"
        alt="Hero"
        className="hero-image"
      />

      <div className="texto-header">
        <p className="tagline-producto">Sonido Profesional</p>
        <h1 className="nombre-producto degradado-verde">TechPRO</h1>
        <p className="descripcion-producto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et,
          a, nam beatae sint sit quos unde pariatur, libero eum ab molestias
          tempore temporibus fugit hic est vitae quasi. Fugit?
        </p>
        <p className="precio-producto">
          Desde <span>$299</span>
        </p>
      </div>
    </div>
  );
}
