import styles from './Coleta.module.css';
import React, { useState, useEffect } from 'react';

function Coleta() {
  const [pontosDeColeta, setPontosDeColeta] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    fetch(`https://reclicla.onrender.com/Coletas`)
      .then(res => res.json())
      .then(data => setPontosDeColeta(data))
      .catch(error => console.error(error));
  }, [pontosDeColeta]);

  const handleBusca = (event) => {
    setBusca(event.target.value);
  };
  //função pra remover acento
  function removeAccents(texto) {
    // Remover acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return texto;
  }

  const pontosFiltrados = pontosDeColeta.filter(ponto => {
    const text = `${ponto.materiais_reciclaveis} ${ponto.endereco} ${ponto.cnpj}`;
    const normalizedText = removeAccents(text).toLowerCase();
    const normalizedBusca = removeAccents(busca).toLowerCase();
    return normalizedText.includes(normalizedBusca);
  });




  return (
    <div className={styles.coleta}>
      <h1 className={styles.h1}>Pontos de coleta de Recicláveis</h1>
      <div className={styles.search}>
        <input type="text" placeholder="Digite o lugar, material ou cnpj" value={busca} onChange={handleBusca} />
      </div>
      <div className={styles.cards}>
        {pontosFiltrados.map(ponto => (
          <div key={ponto.id} className={styles.card}>
            <p><b>Endereço:</b> {ponto.endereco}</p>
            <p><b>Material:</b> {ponto.materiais_reciclaveis}</p>
            <p><b>Horário:</b> {ponto.horario_funcionamento}</p>
            <p><b>CNPJ:</b> {ponto.cnpj}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coleta;