import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../styles/SectionStaff.module.css';

import FuncionarioModels from './FuncionarioModel';

const SectionStaff = () => {
    const [funcionarios, setFuncionarios] = useState([]);

    //metodo get
    useEffect(() => {
      async function fetchFuncionarios() {
        const response = await fetch('https://reclicla.onrender.com/funcionarios');
        const data = await response.json();
        setFuncionarios(data);
        console.log(data);
      }
      fetchFuncionarios();
    }, []);
    return (
        <div className={styles.staff}>
            <div className={styles.titulo}>
                <h1>Conheça nossa equipe: quem está por trás da nossa startup.</h1>
            </div>
            <Row className={styles.row}>
                {funcionarios.map(funcionario => (
                <Col  key={funcionario.id} sm={6} md={4} className>
                    <FuncionarioModels
                    rotafoto={funcionario.rotafoto}
                    nome={funcionario.nome}
                    cargo={funcionario.cargo}
                    lin={funcionario.linkedin}
                    git={funcionario.github}
                    insta={funcionario.instagram}
                    />
                </Col>
                ))}
          </Row>
        </div>
    );
};

export default SectionStaff;