import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    project: "",
  });

  const notifySuccess = () => toast.success("Enviado correctamente");
  const notifyError = () => toast.error("Por favor, completa todos los campos");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://formspree.io/f/xpzgdbbr", formData);
      notifySuccess();
      setFormData({
        name: "",
        email: "",
        project: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <section className="contact section" id="Contacto">
      <div className="container-title-section px-lg t-a-center">
        <span className="text-secondary text-uppercase">
          Impulsa tu Éxito Académico con nuestros servicios
        </span>
        <h2 className="mb-5">Contáctanos</h2>
      </div>
      <div className="contact__container container-contact grid">
        <div className="contact__content">
          <h3 className="contact__title">Escríbeme</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bi bi-envelope-fill contact__card-icon"></i>
              <h3 className="contact__card-title">Correo</h3>
              <span className="contact__card-data">
                informes@artesisperu.com
              </span>
              <a
                href="mailto:informes@artesisperu.com"
                title="Correo electrónico"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Click aquí
                <i className="bi bi-arrow-right-short contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bi bi-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+51-922-345-283</span>
              <a
                href="https://wa.link/xl3k51"
                title="Whatsapp"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Click aquí
                <i className="bi bi-arrow-right-short contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bi bi-facebook contact__card-icon"></i>
              <h3 className="contact__card-title">Facebook</h3>
              <span className="contact__card-data">Artesis Perú</span>
              <a
                title="Facebook"
                href="https://www.facebook.com/artesisperu"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Click aquí
                <i className="bi bi-arrow-right-short contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Déjanos un Correo</h3>
          <form onSubmit={handleFormSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Ingresa tu nombre"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Ingresa tu correo electrónico"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Comentarios</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Ingresa tus comentarios"
                required
                value={formData.project}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    project: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <button
              className="button button--flex"
              title="Escríbeme"
              type="submit"
            >
              Enviar
              <i className="bi bi-send"></i>
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
