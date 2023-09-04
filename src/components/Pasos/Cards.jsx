import React, { useState } from "react";

const Cards = () => {
  const [showModalPasos, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModalPasos = () => {
    setShowModal(true);
  };

  const handleCloseModalPasos = () => {
    setShowModal(false);
  };

  const handleWhatsAppPasos = () => {
    if (selectedService) {
      const message = `Hola, deseo solicitar el plan para el servicio de ${selectedService}.`;

      // Replace this with your WhatsApp API or link to open WhatsApp chat
      window.open(
        `https://wa.me/+51922345283?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="container-cards">
      <article className="card-pasos">
        <span className="number-card">1</span>
        <span className="title-card">Elige el servicio de tu preferencia</span>
        <div className="btn-card-products">
          <button onClick={handleOpenModalPasos} title="Adquirir Servicio">
            Ver más <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </article>
      <article className="card-pasos">
        <span className="number-card">2</span>
        <span>Nuestros asesores te brindarán los planes</span>
        <div className="btn-card-products">
          <button onClick={handleOpenModalPasos} title="Adquirir Servicio">
            Ver más <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </article>
      <article className=" card-pasos">
        <span className="number-card">3</span>
        <span>Firma el contrato y paga seguro con Niubiz</span>
        <div className="btn-card-products">
          <button onClick={handleOpenModalPasos} title="Adquirir Servicio">
            Ver más <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </article>

      {showModalPasos && (
        <div className="time-modal-overlay">
          <div className="time-modal">
            <h4 className="title-modal">Elige un servicio</h4>
            <button
              className="time-modal-close"
              onClick={handleCloseModalPasos}
            >
              &times;
            </button>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">Selecciona un servicio</option>
              <option value="Asesoría y Desarrollo de Tesis">
                Asesoría y Desarrollo de Tesis
              </option>
              <option value="Gestión Editorial en Publicación de Artículos">
                Gestión Editorial en Publicación de Artículos
              </option>
              <option value="Gestión Editorial en Publicación de Libros">
                Gestión Editorial en Publicación de Libros
              </option>
              <option value="Desarrollo de Trabajos de Investigación">
                Desarrollo de Trabajos de Investigación
              </option>
            </select>
            <button className="whatsapp-button" onClick={handleWhatsAppPasos}>
              <i className="bi bi-whatsapp"></i> Ver plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
