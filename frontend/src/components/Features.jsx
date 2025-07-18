// src/components/Features.jsx
import './Features.css';

export default function Features() {
  return (
    <section className="contenedor">
      <div className="iconos">

        <div className="icono">
          <img src="/icono-sonido.svg" alt="imagen icono" />
          <h3>Gran Sonido</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis convallis porttitor sodales. Duis accumsan lorem neque.
          </p>
        </div>

        <div className="icono">
          <img src="/icono-garantia.svg" alt="imagen icono" />
          <h3>Garantía de por vida</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis convallis porttitor sodales. Duis accumsan lorem neque.
          </p>
        </div>

        <div className="icono">
          <img src="/icono-bateria.svg" alt="imagen icono" />
          <h3>+20 Horas de Bateria</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis convallis porttitor sodales. Duis accumsan lorem neque.
          </p>
        </div>

      </div>
    </section>
  );
}
