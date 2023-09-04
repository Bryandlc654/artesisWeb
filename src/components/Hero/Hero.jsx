import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <article id="Inicio" className="hero px-lg">
      <div className="row slider-text align-items-center ">
        <div className="col-lg-7 text d-flex align-items-start align-items-sm-center">
          <div className="desc mt-4 mt-md-0">
            <span className="subheading hero-subtitle mb-2">
              DESBLOQUEA TU ÉXITO ACADÉMICO
            </span>
            <h1>¡Transformamos Tesis en Triunfos!</h1>
            <p className="text-hero">
              Expertos en Convertir Ideas en Investigación de Alto Impacto.
              <br />
              ¡Eleva tu Tesis al Siguiente Nivel!
            </p>
            <div>
              <a
                href="https://wa.link/441dj2"
                target="_blank"
                rel="noreferrer"
                title="Boton De whatsapp"
                className="btn-hero"
              >
                COMENZAR AHORA <i className="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
