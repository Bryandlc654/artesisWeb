import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./services.css";

const Services = () => {
  const serviceCarouselOptions = {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="container-fluid z-index-1 py-5 px-4 px-lg-0" id="Servicios">
      <div className="row g-0">
        <div className="col-lg-3 d-none d-lg-flex">
          <div className="d-flex align-items-center justify-content-center bg-primary-green w-100 h-100">
            <h2
              className="display-4 text-white m-0 text-container"
              style={{ transform: "rotate(-90deg)" }}
            >
              Confía en los especialistas
            </h2>
          </div>
        </div>
        <div className="col-md-12 col-lg-9">
          <div className="ms-lg-5 ps-lg-5">
            <div className="text-center text-lg-start">
              <span className="text-secondary text-uppercase">
                ¿QUÉ NECESITAS HOY?, ENCUENTRA LA SOLUCIÓN IDEAL
              </span>
              <h2 className="mb-5">Servicios</h2>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              pagination={true}
              modules={[Navigation]}
              className="mySwiper"
              {...serviceCarouselOptions}
            >
              <SwiperSlide className="bg-light p-4">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 75, height: 75 }}
                >
                  <i className="bi bi-mortarboard-fill icon-service"></i>
                </div>
                <h4 className="mb-3">Asesoría y Desarrollo de Tesis</h4>
                <p>
                  Te acompañamos de principio a fin: elección del tema,
                  investigación y redacción.
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Licenciatura{" "}
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Maestría
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Doctorado
                </p>
                <a
                  href="https://wa.link/mhubez"
                  title="Ver planes para Tesis"
                  className="btn bg-white text-link w-100 mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver planes
                  <i className="bi bi-arrow-right-short"></i>{" "}
                </a>
              </SwiperSlide>
              <SwiperSlide className="bg-light p-4">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 75, height: 75 }}
                >
                  <i className="bi bi-book-fill icon-service"></i>{" "}
                </div>
                <h4 className="mb-3">Gestión y Publicación de Artículos</h4>
                <p>
                  Nos encargamos de pulir cada detalle, asegurando que tus
                  artículos brillen con claridad.
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Scielo
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Latindex
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Scopus
                </p>
                <a
                  href="https://wa.link/t2q3pm"
                  className="btn bg-white text-link w-100 mt-2"
                  title="Ver planes para Artículos"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver planes
                  <i className="bi bi-arrow-right-short"></i>{" "}
                </a>
              </SwiperSlide>
              <SwiperSlide className="bg-light p-4">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 75, height: 75 }}
                >
                  <i className="bi bi-book-fill icon-service"></i>{" "}
                </div>
                <h4 className="mb-3">Gestión y Publicación de Libros</h4>
                <p>
                  Dale vida a tus palabras y comparte tu conocimiento con el
                  mundo a través de la publicación.
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Enmaquetación
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Gestión Editorial
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Seguro de Publicación
                </p>
                <a
                  href="https://wa.link/dwd5sy"
                  title="Ver planes para Libros"
                  className="btn bg-white text-link w-100 mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver planes
                  <i className="bi bi-arrow-right-short"></i>{" "}
                </a>
              </SwiperSlide>
              <SwiperSlide className="bg-light p-4">
                <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{ width: 75, height: 75 }}
                >
                  <i className="bi bi-pencil-fill icon-service"></i>
                </div>
                <h4 className="mb-3">
                  Desarrollo de trabajos de Investigación
                </h4>
                <p>
                  Potenciamos tus indagaciones, desde la planificación hasta la
                  presentación.
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Monografías
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Tesinas
                </p>
                <p className="text-primary-green fw-medium">
                  <i className="bi bi-check-circle text-primary-green ml-1"></i>
                  Ensayos
                </p>
                <a
                  href="https://wa.link/kw3ls3"
                  title="Planes para Desarrollo de trabajos de Investigación"
                  className="btn bg-white text-link w-100 mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver planes
                  <i className="bi bi-arrow-right-short"></i>{" "}
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
