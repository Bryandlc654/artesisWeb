import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Dirección</h4>
            <p className="mb-2">
              <i className="bi bi-building-fill"></i> Cl. San José Mz 13 Lt16 -
              Pisco
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill"></i>
              +51 922 345 283
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope-fill"></i> informes@artesisperu.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Horario</h4>
            <h6 className="text-light">Lunes - Viernes:</h6>
            <p className="mb-4">09:00 AM - 06:00 PM</p>
            <h6 className="text-light">Sábado:</h6>
            <p className="mb-0">09:00 AM - 12:00 PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Menú</h4>
            <a className="btn btn-link text-light" href="#Inicio">
              Inicio
            </a>
            <br />
            <a className="btn btn-link text-light" href="#Nosotros">
              Nosotros
            </a>
            <br />
            <a className="btn btn-link text-light" href="#Servicios">
              Servicios
            </a>
            <br />

            <a className="btn btn-link text-light" href="#Contacto">
              Contacto
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Redes Sociales</h4>
            <p>Síguenos y comparte nuestro contenido:</p>
            <div className="d-flex pt-2 gap-2">
              <a
                className="btn btn-outline-light btn-social "
                href="https://www.facebook.com/artesisperu/" title="Facebook Artesis"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                target="_blank"
                rel="noreferrer" title="Instagram Artesis"
                href="https://www.instagram.com/artesisperu/"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                target="_blank"
                rel="noreferrer" title="Tik Tok Artesis"
                href="https://www.tiktok.com/@artesisperu"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
