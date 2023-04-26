import Caixa from './CaixaTexto';
import styles from '../../styles/SectionSobre.module.css'
import teams from '/teams.svg'

const SectionSobre = () => {


    return (
        <>
            <div className={styles.dad}>
                <div className={styles.container}>
                    <div className={styles.esquerda} >
                        <img src={teams} />
                    </div>
                    <div className={styles.direita}>

                        <h1>Conectando pessoas e empresas na reciclagem.</h1>
                        <Caixa />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionSobre;