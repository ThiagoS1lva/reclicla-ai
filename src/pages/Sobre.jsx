
import SectionWelcome from '../ui/components/Sobre/SectionWelcome';
import SectionSobre from '../ui/components/Sobre/SectionSobre';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/AuthContext'
import { Row, Col, Container } from 'react-bootstrap';
import FuncionarioModels from '../ui/components/Sobre/FuncionarioModel';
import SectionContactUs from '../ui/components/Sobre/SectionContactUs';

const Sobre = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const { sectionSobreRef } = useContext(Context);

  //metodo get
  useEffect(() => {
    async function fetchFuncionarios() {
      const response = await fetch('https://reclicla.onrender.com/funcionarios');
      const data = await response.json();
      setFuncionarios(data);
    }
    fetchFuncionarios();
  }, []);

  return (
    <>
      <SectionWelcome />
      <div ref={sectionSobreRef}>
        <SectionSobre />
      </div>
      <Container style={{ marginTop: '2%' }}>
        <div style={{ display: 'flex', margin: '0 auto 4% 12%' }}>
          <h2>Conheça nossa equipe: quem está por trás da nossa startup</h2>
        </div>
        <Row style={{ width: '100%' }}>
          {funcionarios.map(funcionario => (
            <Col key={funcionario.id} sm={6} md={4} >
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
      </Container>
      <SectionContactUs />

    </>
  );
};

export default Sobre 