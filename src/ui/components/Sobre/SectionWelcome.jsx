import { Button } from 'react-bootstrap';
import img from '/Recycling.gif';
import styles from '../../styles/SectionWelcome.module.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../contexts/AuthContext'

const SectionWelcome = ({ sobreRef }) => {
    const { handleButtonClick } = useContext(Context);

    return (
        <>
            <div className={styles.dad}>
                    <div className={styles.container}>
                        <div className={styles.esquerda}>
                            <div className={styles.title}><h1>Um jeito mais</h1> <h1>inteligente e consciente</h1> <h1>de lidar com os resíduos.</h1></div>
                            <Link>
                                <Button onClick={handleButtonClick} className={styles.btn} variant="success" size="lg" >
                                    NOS CONHEÇA
                                </Button>
                            </Link>
                        </div>
                        <div className={styles.direita}>
                            <img className={styles.gif1} src={img}/>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default SectionWelcome;