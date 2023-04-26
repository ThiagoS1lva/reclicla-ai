// react, bootstrap,
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


import styles from '../../styles/FuncionarioModel.module.css';


const FuncionarioModels = (props) => {
  //foto card 286x180

  const handleClick = (links) => {
    window.open(links, '_blank');
  };

  return (
    <Card className={styles.card} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.rotafoto} />
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Title>{props.cargo}</Card.Title>
        <div className={styles.containerBTN}>
          <Button className={styles.btn} variant="success" onClick={() => handleClick(props.lin)}><BsLinkedin /></Button>
          <Button className={styles.btn} variant="success" onClick={() => handleClick(props.git)}><BsGithub /></Button>
          <Button className={styles.btn} variant="success" onClick={() => handleClick(props.insta)}><BsInstagram /></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FuncionarioModels;