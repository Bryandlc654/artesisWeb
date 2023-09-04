import React from "react";
import "./about.css";
import AboutImage from "../../assets/about1.webp";
import AboutInv from "../../assets/about2.webp";

const About = () => {
  return (
    <div id="Nosotros" className="container-xxl section-about">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <span className="text-secondary text-uppercase">
              Descubre Nuestra Esencia
            </span>
            <h2 className="mb-4">Somos más que un equipo, somos tus aliados</h2>
            <p className="mb-4">
              ¿Tienes una tesis por desarrollar? Te guiamos desde la idea hasta
              el éxito. ¿Deseas compartir tus descubrimientos? Hacemos que tus
              artículos científicos brillen en revistas de renombre.
            </p>
            <p className="fw-medium text-primary-green">
              <i className="bi bi-check-circle text-primary-green ml-1"></i>
              Entregas en el plazo correcto
            </p>
            <p className="fw-medium text-primary-green">
              <i className="bi bi-check-circle text-primary-green ml-1"></i>
              Seguros de Publicación
            </p>
            <p className="fw-medium text-primary-green">
              <i className="bi bi-check-circle text-primary-green ml-1"></i>
              Excelente calidad de servicio
            </p>

            <div className="bg-primary-green d-flex align-items-center p-4 mt-5">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                style={{ width: 60, height: 60 }}
              >
                <i className="bi bi-envelope-fill icon-mail"></i>{" "}
              </div>
              <div className="ms-3">
                <p className="fs-5 fw-medium mb-2 text-white">Contáctanos:</p>
                <a
                  href="mailto:servicioalcliente@artesisperu.com"
                  title="Correo"
                  className="text-white m-0 text-secondary-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  informes@artesisperu.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-4" style={{ minHeight: 500 }}>
            <div
              className="position-relative h-100 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={AboutImage}
                style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
                alt="Investigadores"
              />
              <img
                className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                src={AboutInv}
                style={{ objectFit: "cover" }}
                alt="Investigadores"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
