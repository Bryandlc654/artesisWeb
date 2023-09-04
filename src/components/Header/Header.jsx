import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "../../assets/logoartesis.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header px-lg ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <img src={Logo} className="logo" alt="Logo Artesis Perú" />
        <ul className="nav-links-pc">
          <li>
            <a href="#Inicio">Inicio</a>
          </li>
          <li>
            <a href="#Nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#Servicios">Servicios</a>
          </li>
          <li>
            <a href="#Contacto">Contacto</a>
          </li>
        </ul>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#Inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#Nosotros" onClick={closeMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#Servicios" onClick={closeMenu}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#Contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>
          <li>
            <button className="close-button" onClick={closeMenu}>
              <i className="bi bi-x-lg"></i>{" "}
            </button>
          </li>
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
