import NumberCounter from "./NumberCount";
import styles from './Estatistica.module.css'
import { IoBusiness } from "react-icons/io5";
import { FaRecycle } from "react-icons/fa";
import { BsFillTrash2Fill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';



function Estatistica() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach((counter) => {
                const counterTop = counter.getBoundingClientRect().top;
                const counterBottom = counter.getBoundingClientRect().bottom;

                const windowHeight = window.innerHeight;
                const isVisible = counterTop < windowHeight && counterBottom >= 0;

                if (isVisible) {
                    console.log('sim')
                    setIsVisible(true);
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div>
                    <IoBusiness size={50} />
                    
                    <h4 className="counter">+<b>{isVisible && (<NumberCounter number={800} />)}</b> Empresas parceiras</h4>
                </div>
                <div>
                    < FaRecycle size={40} />
                    <h4 className="counter">+<b>{isVisible && (<NumberCounter number={100} />)}</b> Toneladas de lixos recolidos por ano!</h4>
                </div>
                <div>
                    <BsFillTrash2Fill size={40} />
                    <h4 className="counter">+<b>{isVisible && (<NumberCounter number={210} />)}</b> Pontos de coletas cadastrados</h4>
                </div>
                <hr />
            </div>
            <hr style={{ width: '80%', margin: '0 auto', border: '2px solid black', borderRadius: '10px' }} />
        </>
    )
}
export default Estatistica