import { Parallax } from 'react-parallax';
import imagem from '../../../../public/home/home.jpg'
import styles from './ParallaxImage.module.css'

const ParallaxImage = () => {
    return (
        <Parallax bgImage={imagem} strength={100}>
            <div style={{
            height: 500,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'relative',
                }}>
                <div className={styles.texto}>
                    <h1>Recicle hoje para um amanhã melhor.</h1>
                </div>
            </div>
        </Parallax>
    )
}

export default ParallaxImage