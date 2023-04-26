import imagem from '/home/reciclagem.jpg'
import styles from './TextImage.module.css'
import { Link } from 'react-router-dom'
function TextImage() {

    return (
        <div className={styles.container}>
            <div className={styles.esquerda}>
                <div className={styles.texto}>
                    <p>Seja parte da mudança positiva no meio ambiente! Nosso site conecta pessoas que reciclam com empresas de reciclagem em sua região. Ao se inscrever em nosso site, você pode encontrar empresas locais que precisam de materiais recicláveis, permitindo que você possa reciclar com mais eficiência.</p>
                    <p> Além disso, você também estará ajudando a reduzir a quantidade de resíduos que vão para os aterros, ajudando a preservar o meio ambiente para as próximas gerações. Cadastre-se hoje mesmo e faça a diferença!
                    </p>
                </div>
                <div className={styles.botao}>
                    <Link to="/cadastro"><button className={styles.btn}>Cadastre-se</button></Link>
                </div>
            </div>
            <div className={styles.direita}>
                <img src={imagem} alt="Imagem de reciclagem" width='100%' />
            </div>
        </div>
    )
}

export default TextImage