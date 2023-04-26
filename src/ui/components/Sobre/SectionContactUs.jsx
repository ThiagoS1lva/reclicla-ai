import styles from '../../styles/SectionContactUs.module.css'
import contateNos from '/contate.png'
import { Button } from 'react-bootstrap'
import { BsFillTelephoneFill, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SectionContactUs = () => {
    return (
        <div className={styles.container}>
            <h2>Tem alguma dúvida?</h2>
            <h4>Contate-nos!</h4>
            <div className={styles.dad}>
                <div className={styles.esquerda}>
                    <div>
                        <Link to="/contato"><Button variant='success'>Fale Conosco</Button></Link>
                    </div>
                    <div className={styles.conteudo}>
                        <div className={styles.telefone}>
                            <BsFillTelephoneFill size='35px' />
                            <h3>&nbsp;: (21)99999-9999</h3>
                        </div>
                        <div className={styles.linha}>&nbsp;</div>
                        <div className={styles.email}>
                            <IoIosMail size='40px' />
                            <h3>&nbsp;: recicla@ai.com</h3>
                        </div>
                        <div className={styles.linha}>&nbsp;</div>
                        <div className={styles.redeSociais}>
                            <h3>Redes Sociais:</h3>
                            <div className={styles.iconesR}>
                                <a href='https://www.linkedin.com/feed/' target='blank'><BsLinkedin size='40px' /></a>
                                <a href='https://github.com/' target='blank'><BsGithub size='40px' /></a>
                                <a href='https://www.instagram.com/' target='blank'><BsInstagram size='40px' /></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.direita}>
                    <img src={contateNos} width='100%' />
                </div>
            </div>
        </div>
    );
};

export default SectionContactUs;