import img1 from '/plastic.jpg';
import img2 from '/eletro.jpg';
import img3 from '/papelao.jpg';
import styles from './Galeria.module.css'

function Galeria() {
  return (
    <div className={styles.gallery}>
      <div className={styles.GalleryImageWrapper}>
        <img src={img1} className={styles.GalleryImage}/>
        <p className={styles.imageText}>Segundo um estudo recente, a taxa de reciclagem de plástico aumentou em 20% nos últimos cinco anos. Isso significa que mais plástico está sendo reciclado e menos está sendo jogado fora, o que é uma boa notícia para o meio ambiente.</p>
      </div>
      <div className={styles.GalleryImageWrapper}>
        <img src={img2} className={styles.GalleryImage}/> 
        <p className={styles.imageText}>Infelizmente, a taxa de reciclagem de eletrônicos ainda é baixa em muitos lugares. De acordo com um relatório recente, menos de 20% dos eletrônicos são reciclados em todo o mundo. Isso é preocupante, porque muitos eletrônicos contêm metais pesados e outros materiais perigosos que podem ser prejudiciais se forem jogados fora de forma inadequada.
        </p>
      </div>
      <div className={styles.GalleryImageWrapper}>
        <img src={img3} className={styles.GalleryImage}/>
        <p className={styles.imageText}>
        A reciclagem de papel e papelão está em alta em muitas partes do mundo. Em alguns países, como a Suécia, mais de 80% do papel e papelão é reciclado. Isso ajuda a economizar árvores e reduzir o desperdício</p>
      </div>
    </div>
  );
}

export default Galeria;
