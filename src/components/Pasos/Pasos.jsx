import React, { useState } from "react";
import "./pasos.css";
import Cards from "./Cards";

const Pasos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [selectedService, setSelectedService] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
    setSelectedType(""); // Reset selected type when service changes
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCalculate = () => {
    let monthsToAdd = 0;

    if (selectedService === "asesoria") {
      if (selectedType === "licenciatura") {
        monthsToAdd = 4;
      } else if (selectedType === "maestria") {
        monthsToAdd = 6;
      } else if (selectedType === "doctorado") {
        monthsToAdd = 5;
      }
    } else if (selectedService === "publicacion") {
      if (selectedType === "scielo") {
        monthsToAdd = 6;
      } else if (selectedType === "scopusQ4" || selectedType === "scopusQ3") {
        monthsToAdd = 9;
      } else if (selectedType === "scopusQ2") {
        monthsToAdd = 12;
      } else if (selectedType === "scopusQ1") {
        monthsToAdd = 15;
      }
    }

    const inputDate = new Date(selectedDate);
    const calculatedDate = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth() + monthsToAdd,
      inputDate.getDate()
    );

    setDeliveryDate(calculatedDate);
  };

  const handleWhatsApp = () => {
    const message = `Hola, visité tu sitio web y deseo adquirir el servicio de: ${
      selectedService === "asesoria"
        ? "Asesoría y Desarrollo de Tesis"
        : "Publicación de Artículos"
    } - ${selectedType}.`;

    // Replace this with your WhatsApp API or link to open WhatsApp chat
    window.open(
      `https://wa.me/+51922345283?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="section-pasos px-lg mt-8">
      <div className="container-100-absolute">
        <div className="container-calculator">
          <i className="bi bi-calendar4-week calendar-icon"></i>
          <div className="container-title-calculator">
            <span>Entrega Exacta:</span>
            <h4>Conoce los Plazos de Nuestros Servicios</h4>
          </div>
          <a
            title="Calcular entrega"
            id="btn-timeCalculator"
            className="arrow-right-icon"
            onClick={handleOpenModal}
          >
            <i className="bi bi-arrow-right-circle "></i>
          </a>
        </div>
      </div>

      {showModal && (
        <div className="time-modal-overlay">
          <div className="time-modal">
            <h4 className="title-modal">Calcula el plazo de entrega</h4>
            <button className="time-modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="input-group">
              <label htmlFor="dateInput">Fecha:</label>
              <br />
              <input
                type="date"
                id="dateInput"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="serviceInput">Servicio:</label>
              <br />
              <select
                id="serviceInput"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="">Elige el servicio...</option>
                <option value="asesoria">Asesoría y Desarrollo de Tesis</option>
                <option value="publicacion">Publicación de Artículos</option>
              </select>
            </div>
            {selectedService === "asesoria" && (
              <div className="input-group">
                <label htmlFor="typeInput">Tipo:</label>
                <br />
                <select
                  id="typeInput"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option value="">Seleccionar...</option>
                  <option value="licenciatura">Licenciatura</option>
                  <option value="maestria">Maestría</option>
                  <option value="doctorado">Doctorado</option>
                </select>
              </div>
            )}
            {selectedService === "publicacion" && (
              <div className="input-group">
                <label htmlFor="typeInput">Tipo:</label>
                <select
                  id="typeInput"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option value="">Seleccionar...</option>
                  <option value="scielo">Scielo</option>
                  <option value="scopusQ4">Scopus Q4</option>
                  <option value="scopusQ3">Scopus Q3</option>
                  <option value="scopusQ2">Scopus Q2</option>
                  <option value="scopusQ1">Scopus Q1</option>
                </select>
              </div>
            )}
            <button className="calculate-button" onClick={handleCalculate}>
              Calcular
            </button>
            {deliveryDate && (
              <div className="container-badge">
                <br />
                <p className="badge-timeCalculator">
                  Fecha de Entrega Estimada:{" "}
                  {deliveryDate.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  del {deliveryDate.getFullYear()}.
                </p>
                <button className="whatsapp-button" onClick={handleWhatsApp}>
                  <i className="bi bi-whatsapp"></i> Contactar a un asesor
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="container-title-section px-lg t-a-center">
        <span className="text-secondary text-uppercase">
          EXPLORA, ELIGE Y OBTÉN UN SERVICIO DE CALIDAD
        </span>
        <h2 className="mb-5">Compra en 3 simples pasos</h2>
      </div>
      <Cards></Cards>
    </section>
  );
};

export default Pasos;
