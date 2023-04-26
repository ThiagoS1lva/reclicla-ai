import { Parallax } from 'react-parallax';
import imagem from '../../../../public/home/home.jpg'
import styles from './ParallaxImage.module.css'

const ParallaxImage = () => {
    return (
        <Parallax bgImage={imagem} strength={500}>
            <div style={{ height: 500 }}>
                <div className={styles.texto}>
                    <h1>Recicle hoje para um amanhã melhor.</h1>
                </div>
            </div>
        </Parallax>
    )
}

export default ParallaxImage