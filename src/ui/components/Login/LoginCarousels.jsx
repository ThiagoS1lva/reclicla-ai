import { Carousel } from 'react-bootstrap';
import img1 from '/img/carrossel/1.png';
import img2 from '/img/carrossel/2.png'
import img3 from '/img/carrossel/3.png'

function LoginCarousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                />
                <div style={{ textAlign: 'center' }}>
                    <h4>Faça login ou cadastre-se no nosso site!</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                />
                <div style={{ textAlign: 'center' }}>
                    <h4>Ajude a transformar materiais orgânicos em recursos valiosos para nosso planeta!</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                />

                <div style={{ textAlign: 'center' }}>
                    <h4>Aumente seus lucros com a venda de materiais recicláveis!</h4>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
export default LoginCarousels