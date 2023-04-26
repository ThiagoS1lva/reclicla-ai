import styles from './Home.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import img from '/Garbage.gif';
import '../ui/components/Home/Estatistica'
import Estatistica from '../ui/components/Home/Estatistica';
import Galeria from '../ui/components/Home/Galeria'

function Home() {
    return(
<div>

        <div className={styles.menu}>
            <h1 className={styles.paragraph} style={{color: '#4CAF50'}}>Recicla.ai</h1>
            <p className={styles.paragraph} style={{fontSize: '20px', color: 'rgba(0, 0, 0, 0.5)'}}>Reciclar não é uma tarefa<br/>difícil, é uma oportunidade<br/> para fazer a diferença.</p>
            <Link to="/cadastro">
            <button className={styles.btn}>Cadastre-se</button>
            </Link>
            <img className={styles.gifzada} style={{width: '500px', height: '500px'}} src={img}/>
            </div>
                <Estatistica/>
                <Galeria/>
            </div>

    )
}

export default Home;