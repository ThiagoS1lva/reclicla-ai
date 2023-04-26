// Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaEnvelope } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from '/img/logo.png';


function Footer() {
  return (
    <footer>
      <div className={styles.elements}>
        <div className={styles.frases}>
          <h6>Reciclar é um gesto de respeito à natureza.</h6>
          <h6> Conecte-se com empresas que compartilham desse sentimento.</h6>
        </div>
        <div className={styles.logo_img}>
          <img src={logo} alt="Logo da Recicla.ai" />
          <div className={styles.cop1}>
            <p> Recicla.ai - 2023 &copy;</p>
          </div>
        </div>
        <div className={styles.contato}>
          <h5>Contatos</h5>
          <div className={styles.icones}>
            <a href='#'><BsInstagram size='30' /></a>
            <a href='#'><BsLinkedin size='30' /></a>
            <a href='#'><FaEnvelope size='30' /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
