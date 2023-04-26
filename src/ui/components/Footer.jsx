// Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from '/img/logo.png';


function Footer() {
  return (
    <footer>
      <div className='elements'>
        <ul> <h5>contato</h5>
          <li>
            <FaInstagram />Recicla.ai
          </li>
          <li>
            <FaLinkedin />Grupo-Reciclaai
          </li>
          <li>
            <FaEnvelope />Recicla.ai@gmail.com
          </li>
        </ul>
        <img src={logo} alt="Logo da Recicla.ai" className="logo-img" />
        <div className='cop1'>
          <p> &copy; 2023 - Recicla.ai</p>
        </div>
        <ul>
          <h3>Recicla.ai</h3>
          <li>
            <p>
              Reciclar é um gesto de respeito à natureza. <br /> Conecte-se com empresas que compartilham desse sentimento.
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
