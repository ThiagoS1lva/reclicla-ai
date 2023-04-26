
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
// importes dos componetes para gerenciamento do hook
import UserForm from '../ui/components/contato/UserFrom';
import ReviewForm from '../ui/components/contato/ReviewFrom';
import Thanks from '../ui/components/contato/Thanks';
import Steps from '../ui/components/contato/Steps';

// Hooks
import { useForm } from '../hooks/useForm';
import { useState } from 'react';
import styles from './Contatos.module.css'
import { Prev } from 'react-bootstrap/esm/PageItem';


const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function Contatos() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />,
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
  <Thanks data={data} />];


  const { currentStep, currentComponent, changeStep, isLastStep, isFirstSetep } = useForm(formComponents);


  return (
    <div className={styles.Contatos}>
      <div className={styles.header}>
        <h2>Entre em contato conosco</h2>
        <p className={styles.p}>É sempre gratificante ver pessoas interessadas em nossos serviços e estamos animados para poder ajudá-lo da melhor forma possível. Por favor, preencha o formulário com as informações solicitadas e entraremos em contato em breve. Obrigado!</p>
      </div>
      <div className={styles.form_container}>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className={styles.inputs_countainer}> {currentComponent}</div>
          <div className={styles.actions}>
            {!isFirstSetep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>)}

            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button' onClick={() => window.location.reload()}>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contatos;